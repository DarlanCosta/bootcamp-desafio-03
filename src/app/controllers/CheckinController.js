import Checkin from '../models/Checkin';
import Student from '../models/Student';
import { addDays, parseISO } from 'date-fns';
import { Op } from 'sequelize';


class CheckinController {
  async index(req, res) {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(400).json({ error: 'Student do not exists' });
    }

    const checkins = await Checkin.findAll({ where: { student_id : id } });

    return res.json(checkins);
  }

  async store(req, res) {

    var dataInicial = addDays(new Date(), -7);


    const checkins = await Checkin.findAndCountAll({
      where: {
        student_id :  req.params.id,
        created_at: {
          [Op.between]: [dataInicial, new Date()],
        },
      }
    });

    if (checkins.count > 5) {
      return res.status(400).json({ error: 'Entries sold out' });
    }


    const { student_id, created_at, updated_at } = await Checkin.create({ student_id : req.params.id });
    return res.json({
      student_id,
      created_at,
      updated_at,
    });
  }


}


export default new CheckinController();

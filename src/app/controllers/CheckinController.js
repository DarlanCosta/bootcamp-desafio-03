import * as Yup from 'yup';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const { id } = req.params;
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'Student do not exists' });
    }

    const checkins = await Checkin.findOne({ where: { student_id : id } });

    return res.json(checkins);
  }

  async store(req, res) {
    const { student_id } = req.params;

    const { created_at, updated_at } = await Checkin.create({"student_id": student_id});
    return res.json({
      student_id,
      created_at,
      updated_at,
    });
  }


}


export default new CheckinController();

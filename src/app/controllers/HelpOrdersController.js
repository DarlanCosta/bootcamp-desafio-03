import * as Yup from 'yup';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const { student_id } = req.params;
    const checkins = await Checkin.findByPk(student_id);

    if (!checkins) {
      return res.status(400).json({ error: 'Student do not exists' });
    }

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

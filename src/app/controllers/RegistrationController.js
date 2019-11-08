import * as Yup from 'yup';
import { addDays, parseISO } from 'date-fns'
import Registration from '../models/Registration';
import Student from '../models/Student';
import Plan from '../models/Plan';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll({
      attributes: ['student_id', 'plan_id', 'start_date', 'end_date', 'price']
    });
    return res.json(registrations);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos dados' });
    }

    const student = await Student.findByPk(req.body.student_id);
    if (!student) {
      return res.status(400).json({ error: "Selected student does not exist" });
    }

    const plan = await Plan.findByPk(req.body.plan_id);
    if (!plan) {
      return res.status(400).json({ error: "Selected plan does not exist" });
    }

    const { student_id, plan_id, start_date } = await req.body;

    const price = plan.price * plan.duration;

    const end_date = addDays(parseISO(start_date), plan.duration * 30);

    Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price
    });

    return res.json({
      student_id,
      plan_id,
      start_date,
      end_date,
      price
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
      end_date: Yup.date().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(400).json({ error: 'Registration dont exist' });
    }

    const { student_id, plan_id, start_date, end_date, price } = await Registration.update(req.body, { where: {id: id } });
    return res.json({
      student_id,
      plan_id,
      start_date,
      end_date,
      price
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(400).json({ error: 'Registration dont exist' });
    }

    Registration.destroy({
      where: { id: id}
    });

    return res.json(registration);
  }
}

export default new RegistrationController();

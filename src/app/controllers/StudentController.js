import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      idade: Yup.number().required(),
      peso: Yup.number().required(),
      altura: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos dados' });
    }

    const studentName = await Student.findOne({ where: { name: req.body.name } });
    const studentEmail = await Student.findOne({ where: { email: req.body.email } });

    if (studentName) {
       return res.status(400).json({ error: 'Student name already exists.' });
    }
    if (studentEmail) {
       return res.status(400).json({ error: 'Student e-mail already exists.' });
    }

    const { id, name, email, idade, peso, altura } = await Student.create(req.body);
    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      idade: Yup.number(),
      peso: Yup.number(),
      altura: Yup.number()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'Student dont exist' });
   }

    const { id, name, email, idade, peso, altura } = await Student.update(req.body, { where: {id: id } });
    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }
}

export default new StudentController();

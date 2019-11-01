import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        id : {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.FLOAT,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}
export default Student;

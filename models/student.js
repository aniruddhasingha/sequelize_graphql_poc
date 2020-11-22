
// module.exports = (sequelize, DataTypes) => {
// let student= sequelize.define('student', {
//         id: {
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//             type: DataTypes.INTEGER
//         },
//         first_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         last_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     },
//         {
//             tableName: 'student'
//         });

//         student.associate =()=>{
//             student.hasMany(hobbies,{foreign_key:'fk_student_id'});
//         }
// return student;
// }


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Hobbies);
    }
  };
  Student.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
       },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
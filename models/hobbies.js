
// module.exports =(sequelize,DataTypes)=>{
// sequelize.define('hobbies',{
//         id: {
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//             type: DataTypes.INTEGER
//            },
//            fk_student_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//            },
//            title: {
//             type: DataTypes.STRING
//            }
//     },
//     {
// 		tableName: 'hobbies'
//     });
//     hobbies.associate =(models)=>{
//         hobbies.belongsTo(models.student, {foreignKey: 'fk_student_id',sourseKey:'id'});
//     }
//     return hobbies;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hobbies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Hobbies.belongsTo(models.Student);
    }
  };
  Hobbies.init({
      id:{
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER
                   },
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hobbies',
  });
  return Hobbies;
};
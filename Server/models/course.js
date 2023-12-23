'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    crs_name:  {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Name Cannot be Null !"},
      notEmpty:{msg:"Name Cannot be Empty !"}
    }
  },
    crs_duration: {
      type:DataTypes.STRING,
    allowNull:true
    },
    crs_fees:{
      type:DataTypes.FLOAT,
    allowNull:false
  },
    crs_image:{
      type:DataTypes.STRING,
    allowNull:true
  },
    syllabus: {
      type:DataTypes.STRING,
    allowNull:true
  },
    status: {
      type:DataTypes.BOOLEAN,
    allowNull:true
  }
  }, {
    sequelize,
    modelName: 'Course',
    tableName:'courses'
  });
  return Course;
};
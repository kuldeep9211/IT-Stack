'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Counsellor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Counsellor.init({
    co_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Email Cannot be Null !"},
      isEmail:{msg:"Wrong Email Format !"},
      notEmpty:{msg:"Email Cannot be Empty !"}
    }
  }, 
    mobile: {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Mobile Cannot be Null !"},
      notEmpty:{msg:"Mobile Cannot be Empty !"},
      len: {
        args: [[10,10]],
        msg: 'Phone Number can only be 10 digits'
      }
    }
  },
    password:{
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Password Cannot be Null !"},
      notEmpty:{msg:"Password Cannot be Empty !"}
    }
  } 
  }, {
    sequelize,
    modelName: 'Counsellor',
    tableName:'counsellors'
  });
  return Counsellor;
};
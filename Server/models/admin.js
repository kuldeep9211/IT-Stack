'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    email: {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Email Cannot be Null !"},
      isEmail:{msg:"Wrong Email Format !"},
      notEmpty:{msg:"Email Cannot be Empty !"}
    }
  },

    mobile:{
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Mobile No. Cannot be Null !"},
      len: {
        args: [[10,10]],
        msg: 'Phone Number can only be 10 digits'
      },
      notEmpty:{msg:"Mobile No. Cannot be Empty !"}
    }
  },
    password: {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Password Cannot be Null !"},
      notEmpty:{msg:"Password Cannot be Empty !"}
    }
  } 
    
  }, {
    sequelize,
    modelName: 'Admin',
    tableName: 'admins'
  });
  return Admin;
};
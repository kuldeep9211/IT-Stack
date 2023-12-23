'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registration.init({
    reg_no:{
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Registration no. Cannot be Null !"},
      notEmpty:{msg:"Registration no. Cannot be Empty !"}
    }
  },
    date:{
      type:DataTypes.DATE,
    allowNull:false,
    validate:{
      notNull:{msg:"Registration Date Cannot be Null !"},
      notEmpty:{msg:"Registration Date. Cannot be Empty !"}
    }
  },
    stud_name: {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Name Cannot be Null !"},
      notEmpty:{msg:"Name Cannot be Empty !"}
    }
  },
    password: {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Password Cannot be Null !"},
      notEmpty:{msg:"Password Cannot be Empty !"}
    }
  },
    gender: {
      type:DataTypes.STRING,
    allowNull:true
    },
    mobile: {
      type:DataTypes.STRING,
    allowNull:true,
    validate:{
      notEmpty:{msg:"Mobile no. Cannot be Empty !"}
    }
  },
    p_name:{
      type:DataTypes.STRING,
    allowNull:true,
    validate:{
      notEmpty:{msg:"Parents Name Cannot be Empty !"}
    }
  },
    p_mobile: {
      type:DataTypes.STRING,
    allowNull:true,
    validate:{
      notEmpty:{msg:"Parents No. Cannot be Empty !"}
    }
  },
    address: {
      type:DataTypes.STRING,
    allowNull:true,
    validate:{
      notEmpty:{msg:"Address Cannot be Empty !"}
    }
  },
    qualification: {
      type:DataTypes.STRING,
    allowNull:true,
    validate:{
      notEmpty:{msg:"Qualification Cannot be Empty !"}
    }
  },
    status: DataTypes.BOOLEAN

  },
  {
    sequelize,
    modelName: 'Registration',
    tableName: 'registration'
  });
  return Registration;
};
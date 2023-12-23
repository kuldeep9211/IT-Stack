'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faculty.init({
    f_name:{
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Name Cannot be Null !"},
      notEmpty:{msg:"Name Cannot be Empty !"}
    }
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
      notNull:{msg:"Mobile No. Cannot be Null !"},
      notEmpty:{msg:"Mobile No. Cannot be Empty !"},
      len: {
        args: [[10,10]],
        msg: 'Mobile No. can only be 10 digits'
      },
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
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Faculty',
    tableName:'faculties'
  });
  return Faculty;
};
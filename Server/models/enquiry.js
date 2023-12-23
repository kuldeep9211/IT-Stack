'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enquiry.belongsTo(models.Course,
        {foreignKey:"course"}
        )
        Enquiry.belongsTo(models.Counsellor,
          {foreignKey:"counsellor"}
          )
    }
  }
  Enquiry.init({
    enq_no: {
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Enquiry Number Cannot be Null !"},
      notEmpty:{msg:"Enquiry Number Cannot be Empty !"}
    }
  },
    enq_date:  {
      type:DataTypes.DATE,
    allowNull:false,
    validate:{
      notNull:{msg:"Enquiry Date Cannot be Null !"},
      notEmpty:{msg:"Enquiry Date Cannot be Empty !"}
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
    mobile:{
      type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Mobile no. cannot be Null !"},
      notEmpty:{msg:"Mobile no. Cannot be Empty !"},
      len: {
        args: [[10,10]],
        msg: 'Phone Number can only be 10 digits'
      }
    }
  },
    qualification:{
      type:DataTypes.STRING,
    allowNull:true
  },
    clg_name:{
      type:DataTypes.STRING,
    allowNull:true
  },
    fees: {
      type:DataTypes.FLOAT,
    allowNull:true
  },
    placement: {
      type:DataTypes.BOOLEAN,
    allowNull:true
  },
    enq_type: {
      type:DataTypes.STRING,
    allowNull:true
  },
    feedback: {
      type:DataTypes.STRING,
    allowNull:true
  },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Enquiry',
    tableName:'enquiries'
  });
  return Enquiry;
};
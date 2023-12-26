'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enquiries', {
      enq_no: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      
      enq_date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      stud_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull:true
      },
      qualification: {
        type: Sequelize.STRING,
        allowNull:false
      },
      clg_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      course:{
        type:Sequelize.INTEGER,
        references : {model:"courses",key:"crs_id"}
      },
      counsellor:{
        type:Sequelize.INTEGER,
        references : {model:"counsellors",key:"co_id"}
      },
      fees: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      placement: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      enq_type: {
        type: Sequelize.STRING,
        allowNull:false
      },
      feedback: {
        type: Sequelize.STRING,
        allowNull:true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enquiries');
  }
};
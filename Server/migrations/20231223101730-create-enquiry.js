'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enquiries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      enq_no: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
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
        allowNull:true
      },
      clg_name: {
        type: Sequelize.STRING,
        allowNull:true
      },
      course:{
        type:Sequelize.INTEGER,
        references : {model:"courses",key:"crs_id"}
      },
      counsellor:{
        type:Sequelize.INTEGER,
        references : {model:"counsellors",key:"id"}
      },
      fees: {
        type: Sequelize.FLOAT,
        allowNull:true
      },
      placement: {
        type: Sequelize.BOOLEAN,
        allowNull:true
      },
      enq_type: {
        type: Sequelize.STRING,
        allowNull:true
      },
      feedback: {
        type: Sequelize.STRING,
        allowNull:true,
      },
      status: {
        type: Sequelize.BOOLEAN
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
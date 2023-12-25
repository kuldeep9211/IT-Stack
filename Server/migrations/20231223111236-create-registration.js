'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registration', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reg_no: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      enq_no:{
        type:Sequelize.INTEGER,
        references : {model:"enquiries",key:"enq_no"}
      },
      date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      stud_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull:false
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull:false
      },
      p_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      p_mobile: {
        type: Sequelize.STRING,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      stud_course:{
        type:Sequelize.INTEGER,
        references : {model:"stud_courses",key:"stud_crs_id"}
      },
      qualification: {
        type: Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('registration');
  }
};
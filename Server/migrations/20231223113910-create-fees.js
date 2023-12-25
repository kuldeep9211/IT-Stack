'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fees', {
      fees_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student:{
        type: Sequelize.INTEGER,
        references: { model: "registration", key: "id" }
      },
      course:{
        type: Sequelize.INTEGER,
        references: { model: "stud_courses", key: "stud_crs_id" }
      },
      rec_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fees_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('fees');
  }
};
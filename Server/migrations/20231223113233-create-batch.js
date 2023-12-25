'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('batches', {
      b_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course: {
        type: Sequelize.INTEGER,
        references: { model: "courses", key: "crs_id" }
      },
      start_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      batch_timing: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      faculty: {
        type: Sequelize.INTEGER,
        references: { model: "faculties", key: "f_id" }
      },
      student: {
        type: Sequelize.INTEGER,
        references: { model: "stud_batches", key: "id" }
      },
      Satus: {
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
    await queryInterface.dropTable('batches');
  }
};
// app/models/Admin.js
import { DataTypes } from 'sequelize';
import sequelize from '@/app/config/database';

const Admin = sequelize.define('Admin', {
  id: { // Matches your table's id field
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'admins', // Explicitly set to match your table
  timestamps: false,
});

module.exports = Admin;
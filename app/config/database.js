import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('gogirlsict', 'root', 'goGirlsDev', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
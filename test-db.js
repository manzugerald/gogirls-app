// test-db.js
try {
    require('mysql2');
    console.log('mysql2 loaded successfully');
  } catch (error) {
    console.error('Failed to load mysql2:', error);
  }
  
  const { Sequelize } = require('sequelize');
  
  const sequelize = new Sequelize('gogirlsict', 'root', 'goGirlsDev', {
    host: 'localhost',
    dialect: 'mysql',
  });
  
  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connection successful');
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  })();
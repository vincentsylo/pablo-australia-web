import Sequelize from 'sequelize';
import _ from 'lodash';
import Product from './Product';
import Shop from './Shop';

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
);

const db = {};
const tables = [
  Product,
  Shop,
];
_.each(tables, (table) => {
  const model = table(sequelize, Sequelize);
  db[model.name] = model;
});

_.keys(db, (modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
export default db;

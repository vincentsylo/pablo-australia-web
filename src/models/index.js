import Sequelize from 'sequelize';
import _ from 'lodash';
import Shop from './Shop';
import Category from './Category';
import Product from './Product';

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
  Shop,
  Category,
  Product,
];

_.each(tables, (table) => {
  const model = table(sequelize, Sequelize);
  db[model.name] = model;
});

_.each(db, (model) => {
  if ('associate' in model) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
export default db;

/* @flow */
export default function (sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
}

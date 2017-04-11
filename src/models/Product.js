export default function (sequelize, DataTypes) {
  return sequelize.define('Product', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
}

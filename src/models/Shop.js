export default function (sequelize, DataTypes) {
  return sequelize.define('Shop', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    branchName: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.STRING,
    },
    suburb: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    postcode: {
      type: DataTypes.INTEGER,
    },
  });
}

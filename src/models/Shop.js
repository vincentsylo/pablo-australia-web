export default function (sequelize, DataTypes) {
  return sequelize.define('Shop', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
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
    state: {
      type: DataTypes.STRING,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
  });
}

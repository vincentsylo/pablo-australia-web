export default function (sequelize, DataTypes) {
  const News = sequelize.define('News', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    urlSlug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
  }, {
    paranoid: true,
  });

  return News;
}

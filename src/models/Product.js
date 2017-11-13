export default function (sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    shortDescription: {
      type: DataTypes.STRING,
    },
    featured: {
      type: DataTypes.BOOLEAN,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    urlSlug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    comingSoon: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Product.belongsTo(models.Category, {
          as: 'Category',
          foreignKey: {
            name: 'categoryId',
            allowNull: false,
          },
        });
      },
    },
    paranoid: true,
  });

  return Product;
}

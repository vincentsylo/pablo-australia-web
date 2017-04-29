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
      type: DataTypes.STRING(10000),
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
    urlSlug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

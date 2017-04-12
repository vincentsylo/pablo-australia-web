export default function (sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Product.belongsTo(models.Category, { as: 'Category', foreignKey: 'categoryId' });
      },
    },
  });

  return Product;
}

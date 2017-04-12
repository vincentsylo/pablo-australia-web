export default function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Category.hasMany(models.Product, { as: 'Products', foreignKey: 'categoryId' });
      },
    },
  });

  return Category;
}

export default function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
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
    priority: {
      type: DataTypes.INTEGER,
    },
    urlSlug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Category.hasMany(models.Product, {
          as: 'Products',
          foreignKey: {
            name: 'categoryId',
            allowNull: false,
          },
        });
      },
    },
    paranoid: true,
  });

  return Category;
}

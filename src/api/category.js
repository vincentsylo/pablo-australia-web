import models from '../models';

export default function (app) {
  app.get('/api/category', async (req, res) => {
    try {
      const categories = await models.Category.findAll({
        include: [{ model: models.Product, as: 'Products' }],
        order: [
          ['priority'],
          [{ model: models.Product, as: 'Products' }, 'order'],
        ],
      });
      res.json(categories);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.get('/api/category/:categoryId', async (req, res) => {
    try {
      const { categoryId } = req.params;

      const category = await models.Category.findById(categoryId);
      res.json(category);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}

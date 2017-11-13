import models from '../models';
import { validateCache } from '../server/serverCache';

export default function (app) {
  app.get('/api/category', async (req, res) => {
    try {
      const categories = await validateCache(req, res, () => (
        models.Category.findAll({
          include: [{ model: models.Product, as: 'Products' }],
          order: [
            ['priority'],
            [{ model: models.Product, as: 'Products' }, 'order'],
          ],
        })
      ));
      res.json(categories);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.get('/api/category/:categoryId', async (req, res) => {
    try {
      const { categoryId } = req.params;

      const category = await validateCache(req, res, () => models.Category.findById(categoryId));
      res.json(category);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}

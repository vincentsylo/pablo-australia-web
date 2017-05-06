import models from '../models';
import { validateCache } from '../server/serverCache';

export default function (app) {
  app.get('/api/category', async (req, res) => {
    try {
      const categories = await validateCache(req, () => (
        models.Category.findAll({
          include: [{ model: models.Product, as: 'Products' }],
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

      const category = await validateCache(req, () => models.Category.findById(categoryId));
      res.json(category);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.put('/api/category/:categoryId', async (req, res) => {
    try {
      const { categoryId } = req.params;

      const category = await models.Category.update({ ...req.body }, { where: { id: categoryId } });
      res.json(category);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.post('/api/category', async (req, res) => {
    try {
      const category = await models.Category.create({ ...req.body });
      res.json(category);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.delete('/api/category/:categoryId', async (req, res) => {
    try {
      const { categoryId } = req.params;

      const deletedRows = await models.Category.destroy({ where: { id: categoryId } });
      res.json(deletedRows);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}

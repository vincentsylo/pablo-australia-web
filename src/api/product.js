import models from '../models';
import { validateCache } from '../server/serverCache';

export default function (app) {
  app.get('/api/product', async (req, res) => {
    try {
      const products = await validateCache(req, () => models.Product.findAll({
        include: [{ model: models.Category, as: 'Category' }],
        order: ['order'],
      }));
      res.json(products);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.get('/api/product/featured', async (req, res) => {
    try {
      const products = await validateCache(req, () => models.Product.findAll({
        where: { featured: true },
        include: [{ model: models.Category, as: 'Category' }],
      }));
      res.json(products);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.get('/api/product/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      const product = await validateCache(req, () => models.Product.find({
        where: { urlSlug: slug },
        include: [{ model: models.Category, as: 'Category' }],
      }));
      res.json(product);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}

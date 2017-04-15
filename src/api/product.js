import models from '../models';

export default function (app) {
  app.get('/api/product', async (req, res) => {
    try {
      const products = await models.Product.findAll({
        include: [{ model: models.Category, as: 'Category' }],
      });
      res.json(products);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.get('/api/product/:productId', async (req, res) => {
    try {
      const { productId } = req.params;

      const product = await models.Product.findById(productId);
      res.json(product);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.put('/api/product/:productId', async (req, res) => {
    try {
      const { productId } = req.params;
      const { name, description, price, categoryId } = req.body;

      const product = await models.Product.update({ name, description, price, categoryId }, { where: { id: productId } });
      res.json(product);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.post('/api/product', async (req, res) => {
    try {
      const { name, description, price, categoryId } = req.body;

      const product = await models.Product.create({ name, description, price, categoryId });
      res.json(product);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.delete('/api/product/:productId', async (req, res) => {
    try {
      const { productId } = req.params;

      const deletedRows = await models.Product.destroy({ where: { id: productId } });
      res.json(deletedRows);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}

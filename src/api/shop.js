import models from '../models';

export default function (app) {
  app.get('/api/Shop/:shopId', async (req, res) => {
    const { shopId } = req.params;

    const shop = await models.Shop.findById(shopId);
    if (shop) {
      res.json(shop);
    }

    res.sendStatus(400);
  });
}

import models from '../models';
import { validateCache } from '../server/serverCache';

export default function (app) {
  app.get('/api/news', async (req, res) => {
    try {
      const { limit = 5, offset = 0 } = req.query;

      const result = await validateCache(req, () => models.News.findAndCountAll({ limit, offset }));
      res.json({
        records: result.rows,
        totalCount: result.count,
      });
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.get('/api/news/featured', async (req, res) => {
    try {
      const news = await validateCache(req, () => models.News.findAll({ limit: 3 }));
      res.json(news);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.get('/api/news/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      const news = await validateCache(req, () => models.News.find({ where: { urlSlug: slug } }));
      res.json(news);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.post('/api/news', async (req, res) => {
    try {
      const news = await models.News.create({ ...req.body });
      res.json(news);
    } catch (error) {
      res.sendStatus(400);
    }
  });

  app.delete('/api/news/:newsId', async (req, res) => {
    try {
      const { newsId } = req.params;

      const deletedRows = await models.News.destroy({ where: { id: newsId } });
      res.json(deletedRows);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}

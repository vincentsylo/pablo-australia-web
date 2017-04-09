export default function (app) {
  app.get('/api/shop/:shopId', (req, res) => {
    res.json([
      'yay'
    ])
  });
}

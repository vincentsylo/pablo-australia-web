export default function (app) {
  app.get('/api/product/:productId', (req, res) => {
    res.json([
      'yay',
    ]);
  });
}

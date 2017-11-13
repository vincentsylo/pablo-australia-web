const cache = {};

export default cache;

export async function validateCache(req, res, fn) {
  res.set({ 'Cache-Control': 'max-age=300' });

  const location = req.url;
  const ttl = 60000;

  if (!cache[location] || (cache[location] && Date.now() - cache[location].cacheTime > ttl)) {
    const data = await fn(req);
    cache[location] = {
      data,
      cacheTime: Date.now(),
    };
  }

  return cache[location].data;
}

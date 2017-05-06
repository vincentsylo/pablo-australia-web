const cache = {};

export default cache;

export async function validateCache(req, fn) {
  const location = req.url;
  const ttl = 60000;

  if (!cache[location] || (cache[location] && Date.now() - cache[location].cacheTime > ttl)) {
    const data = await fn(req);
    cache[location] = data;
  }

  return cache[location];
}
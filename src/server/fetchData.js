import _ from 'lodash';
import { matchPath } from 'react-router-dom';
import routes from '../routes';

export default async function fetchData(req) {
  const matchedComponents = _(routes)
    .map(route => ({ key: route.path, ...route }))
    .filter(route => _.has(route, 'component.fetch'))
    .filter(route => matchPath(req.url, route))
    .value();

  const keys = _.map(matchedComponents, 'key');
  if (!keys.length) return {};

  const responses = await Promise.all(_.map(matchedComponents, fetchObject => fetchObject.component.fetch()));

  return _.zipObject(keys, responses);
}

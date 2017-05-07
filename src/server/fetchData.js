import _ from 'lodash';
import { matchPath } from 'react-router-dom';
import routes from '../routes';

export default async function fetchData(req) {
  const matchedComponents = _(routes)
    .map(route => ({ key: route.url, ...route }))
    .filter(route => _.has(route, 'component.fetch'))
    .filter(route => !!matchPath(req.params[0], route))
    .map(route => ({ ...route, params: matchPath(req.params[0], route).params }))
    .value();

  const keys = _.map(matchedComponents, 'key');
  if (!keys.length) return {};

  const responses = await Promise.all(_.map(matchedComponents, fetchObject => fetchObject.component.fetch({ ...fetchObject.params, ...req.query })));

  return _.zipObject(keys, responses);
}

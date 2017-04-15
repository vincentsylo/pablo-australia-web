import shop from './shop';
import category from './category';
import product from './product';

export default function (app) {
  shop(app);
  category(app);
  product(app);
}

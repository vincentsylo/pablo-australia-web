import shop from './shop';
import category from './category';
import product from './product';
import contact from './contact';

export default function (app) {
  shop(app);
  category(app);
  product(app);
  contact(app);
}

import shop from './shop';
import category from './category';
import product from './product';
import news from './news';
import contact from './contact';

export default function (app) {
  shop(app);
  category(app);
  product(app);
  news(app);
  contact(app);
}

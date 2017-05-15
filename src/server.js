import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import models from './models';
import getApi from './api';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

getApi(app);

app.use('/uploads', express.static('uploads'));
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static('dist/public'));
} else {
  app.use(express.static('public'));
}

app.get('*', require('./server/serverSideRender'));

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8081;
models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port);
  });

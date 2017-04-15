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

app.use(express.static('dist/public'));
app.use(express.static('build/public'));
app.get('*', require('./server/serverSideRender'));

const port = process.env.PORT || 8081;
models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port);
  });

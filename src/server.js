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
app.use((req, res, next) => {
  const allowedOrigins = ['http://108.61.251.103', 'http://www.pabloaustralia.com.au', 'http://pabloaustralia.com.au', 'http://localhost:8080'];
  const { origin } = req.headers;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

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

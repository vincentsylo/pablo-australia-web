import express from 'express';
import 'dotenv/config'; // Setup process.env variables
import models from './models';
import getApi from './api';

const app = express();

getApi(app);

app.use(express.static('dist/public'));
app.use(express.static('build/public'));
app.get('*', require('./server/serverSideRender'));

const port = process.env.PORT || 8081;
models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port);
  });

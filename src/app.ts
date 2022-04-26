// const createError = require('http-errors');
import express from 'express';
import cors from 'cors';
import { dbConnection } from './database';
import router from './routes/routes';

const app = express();
require('dotenv').config();

dbConnection();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', router);

app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001')
});


export default app;

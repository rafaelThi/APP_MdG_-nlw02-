import express from 'express';
import gamesController from './controllers/gamesControllers';

const routes = express.Router();
const gamesControllers = new gamesController()


routes.get('/games', gamesControllers.index);
routes.post('/games', gamesControllers.create);

   
   export default routes;
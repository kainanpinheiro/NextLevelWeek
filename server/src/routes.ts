import express from 'express';

import PointsControllers from './controllers/pointsController';
import ItemsControllers from './controllers/itemsController';

// index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsControllers();
const itemsControllers = new ItemsControllers();

routes.get('/items', itemsControllers.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import router from './app/router';
const app: Application = express();
// const port = 3000;

//parser
app.use(express.json());
app.use(cors());

//application routes
// app.use('/api/products', BicycleRoutes);
// app.use('/api/orders', OrderRoutes);
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
// app.use(globalErrorHandler);
// app.use(notFound);

export default app;

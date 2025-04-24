import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import router from './app/router';
import globalErrorHandler from './app/modules/middlewares/globalErrorHandler';
import notFound from './app/modules/middlewares/notFound';
const app: Application = express();
// const port = 3000;

//parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173" ,"http://localhost:5174"
  
], credentials: true }));


//application routes
// app.use('/api/products', BicycleRoutes);
// app.use('/api/orders', OrderRoutes);
app.use('/api/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Bicycle store!');
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;

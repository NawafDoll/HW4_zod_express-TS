import express from 'express';
import employeeRouter from './router/employ.route';

import { z } from 'zod';
const app = express();
const port = 6004;
app.use(express.json());

app.use('/api/v1/employee', employeeRouter);


app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`);
});
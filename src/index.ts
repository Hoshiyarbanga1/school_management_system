import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.routes';
import connectDB from './config/db'; 

dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use('/api', routes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port', process.env.PORT || 3000);
});

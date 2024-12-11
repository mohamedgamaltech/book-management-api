import express from 'express';
import bookRoutes from './routes/book.routes';
import { connectDatabase } from './config/db';
import loggerMiddleware from './middleware/loggerMiddleware';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(loggerMiddleware);
app.use(express.json());

// Routes
app.use('/api', bookRoutes);

// Initialize database connection
connectDatabase();

app.use(errorHandlerMiddleware);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
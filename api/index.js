import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from 'morgan';
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect(process.env.MONGODB)
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) => console.log(err));

const app = express();

// Log Requests
app.use(logger('dev'));
// allow json transfer
app.use(express.json());

app.listen(3001, () => {
    console.log('Server running on port 3001!');
});

// Mount Routers
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Add middleware to handle error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
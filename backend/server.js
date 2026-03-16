require('dotenv').config();
const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const errorHandler = require('./middlewares/errorHandler');
const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
connectDB(process.env.MONGO_URI);
app.use('/api/auth',authRoutes);
app.use('/api/book',bookRoutes);

app.use(errorHandler);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log('server running this ${PORT}');
});

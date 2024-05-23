import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = 'mongodb+srv://Hari:msc@cluster0.xplji6d.mongodb.net/movieapi?retryWrites=true&w=majority&appName=Cluster0'; 

app.use(bodyParser.json());
app.use('/api', movieRoutes);

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error.message);
  });
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authroute.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './routes/messageroute.js';
import userRoutes from './routes/user.routes.js';
import connecToDB from './db/connectToDb.js';

dotenv.config(); // Ensure environment variables are loaded before use

const app = express();
const port = process.env.PORT || 5000; // Use default port 5000 if PORT is not defined in .env

app.use(express.json()); // Parse incoming JSON payloads
app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  connecToDB();
  console.log(`Server listening on port ${port}`);
});

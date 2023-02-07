import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import projectsRoutes from './routes/projects.js';
import userRouter from './routes/user.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/projects', projectsRoutes);
app.use('/user', userRouter);

app.get('/', (req, res) => {
	res.send('Bienvenue sur CryptoHunterZ');
});

const CONNECTION_URL = process.env.DB_CONNECTION;
const BackURL = process.env.REMOTE_BACK_URL;
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Application backend démarré sur: ${BackURL} ou sur http://localhost:${PORT}`))
	)
	.catch((error) => console.log(`${error} n'a pas réussi à se connecter.`));

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User, validate } from '../models/User.js';
import Token from '../models/Token.js';

import sendEmail from '../utils/email.js';
import crypto from 'crypto';

dotenv.config();

const secret = process.env.SECRET;
const backURL = process.env.REMOTE_BACK_URL;
const frontURL = process.env.FRONT_URL;

export const signin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const oldUser = await User.findOne({ email });

		if (!oldUser) return res.status(404).json({ message: "L'utilisateur n'existe pas" });

		const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

		if (!isPasswordCorrect)
			return res.status(400).json({ message: 'Les identifiants sont invalides' });

		if (oldUser.verified === false)
			return res.status(400).json({ message: "Vous n'avez pas validé votre email" });

		const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
			expiresIn: '1h',
		});

		res.status(200).json({ result: oldUser, token });
	} catch (err) {
		res.status(500).json({ message: "Quelquechose s'est mal passé." });
	}
};

export const signup = async (req, res) => {
	const { email, password, firstName, lastName } = req.body;

	try {
		const { error } = validate(req.body);
		if (error) {
			console.log(`Log de error.details[0].message :`, error.details[0].message);
			return res.status(400).send(error.details[0].message);
		}

		const oldUser = await User.findOne({ email });

		if (oldUser) return res.status(400).json({ message: "L'utilisateur existe déjà" });

		// Dans la fonction ci-dessous, bcrypt.hash prend en paramètres le mot de passe
		// et le second paramètre permet le nombre salage (salt) pour un maximum de sécurité
		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await User.create({
			email,
			password: hashedPassword,
			firstName: firstName,
			lastName: lastName,
			name: `${firstName} ${lastName}`,
		});

		const emailToken = await Token.create({
			userId: result._id,
			token: crypto.randomBytes(32).toString('hex'),
		});

		const verifyLink = `${backURL}/user/verify/${emailToken.userId}/${emailToken.token}`;

		const message = `<h1> Bienvenue sur Crypto Hunter <span style='color:#c80c81;'>Z</span> </h1> <p>Il ne vous reste plus qu'une étape pour valider compte, il vous suffit de cliquer sur le gros bouton ci-dessous: </p> <button style='width:9em; height:3em; background-color:#c80c81; color: white; border: 2px solid #c80c81; border-radius: 5px; font-size: large; font-weight: bold;'><a href=${verifyLink}>Crypto Hunter Z</button></a> <p> A très vite nouveau chercheur ! Que la Blockchain soit avec toi !</p><a href=${frontURL}><span style='color:blue; text-decoration: underline; '>www.crypto-hunterz.com</span></a>`;

		await sendEmail(email, 'Verify Email', message);

		// console.log(`Log de result :`, result);

		res.status(201).json({ result });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
		console.log(error);
	}
};

export const verify = async (req, res) => {
	const { id, token } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

	const update = { verified: true };

	try {
		const user = await User.findOne({ _id: id });

		if (!user) return res.status(400).send('Le lien est invalide');

		const foundToken = await Token.findOne({
			userId: id,
			token: token,
		});

		if (!foundToken) return res.status(400).send('Le lien est invalide');

		await User.findByIdAndUpdate(id, update);
		await Token.deleteOne({ token: token });

		res.redirect(`${frontURL}/verified-email`);
	} catch (error) {
		res.status(400).send('Une erreur est apparue');
	}
};

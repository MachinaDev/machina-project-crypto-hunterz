import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, html) => {
	try {
		const transporter = nodemailer.createTransport({
			service: process.env.MAIL_SERVICE,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIl_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.MAIL_USER,
			to: email,
			subject: subject,
			html: html,
		});
	} catch (error) {
		console.log(error);
	}
};
export default sendEmail;

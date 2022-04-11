import nodemailer from 'nodemailer';
import config from '../config.js';
const { ETHEREAL_HOST, ETHEREAL_PORT, ETHEREAL_USERNAME, ETHEREAL_PASSWORD } = config;

const auth = {
    host: ETHEREAL_HOST,
    port: ETHEREAL_PORT,
    auth: {
        user: ETHEREAL_USERNAME,
        pass: ETHEREAL_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(auth);

export default transporter;
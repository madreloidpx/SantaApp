import pug from 'pug';
import path from 'path';
import mailer from './mailer.js';
import config from '../config.js';
const { NORTH_POLE_EMAIL, SANTA_EMAIL } = config;

export async function sendMailToSanta(requestList) {
    const __dirname = path.resolve();
    const mailOptions = {
        from: NORTH_POLE_EMAIL,
        to: SANTA_EMAIL,
        subject: 'List of Requests',
        html: pug.renderFile(path.join(__dirname, 'views', 'request_list.pug'), { child_list: requestList }),
    };
    try {
        let info = await mailer.sendMail(mailOptions);
        console.log("Message sent:", info.messageId);
    } catch (err) {
        console.error(err);
    }
}
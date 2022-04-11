import cron from 'node-cron';
import { getCurrentRequests } from './database.js';
import { sendMailToSanta } from './email.js';

export const humphrey = cron.schedule('*/15 * * * * *', emailSanta, { scheduled: false });

export const startElfWork = () => {
    console.log("Work Humphrey!");
    humphrey.start();
}

function emailSanta() {
    const requests = getCurrentRequests();
    if (!requests) {
        console.log("No ongoing requests.");
    } else {
        console.log("Number of requests:", requests.length);
        sendMailToSanta(requests);
    }
}
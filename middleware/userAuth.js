import request from 'request';
import config from '../config.js';
const { USER_API, PROFILE_API } = config;

const defaultHeaders = {
    "Content-Type": "application/json"
};

function sendRequest(httpOptions) {
    return new Promise((resolve, reject) => {
        request.get(httpOptions, (err, res) => {
            if (err) return reject(res);
            resolve(res.body);
        });
    });
}

function fetchUsers() {
    const httpOptions = {
        json: true,
        url: USER_API,
        headers: defaultHeaders,
    };
    const users = sendRequest(httpOptions);
    return users;
}

function fetchProfiles() {
    const httpOptions = {
        json: true,
        url: PROFILE_API,
        headers: defaultHeaders,
    }
    const profiles = sendRequest(httpOptions);
    return profiles;
}

export async function fetchUserData(req, res, next) {
    try {
        const users = await fetchUsers();
        const profiles = await fetchProfiles();
        const userData = users.find(user => user.username == req.body.userid);
        if (!userData) {
            return res.status(401).send("Please create an account first.");
        }
        const userProfile = profiles.find(user => user.userUid == userData.uid);
        if (!userProfile) {
            return res.status(401).send("Please fill out your user profile first.");
        }
        req.user = { username: userData.username, ...userProfile };
        next();
    } catch (err) {
        return res.status(500).send(err);
    }
}

function verifyAge(birthdate) {
    const bday = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - bday.getFullYear();
    let monthDiff = today.getMonth() - bday.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < bday.getDate()) {
        age--;
    }
    if (age < 10) return true;
    return false;
}

export function verifySantaRequirements(req, res, next) {
    if (!req.user.birthdate || !req.user.address) {
        return res.status(401).send("Please complete your profile first.");
    }
    if (new Date(req.user.birthdate) == "Invalid Date" || isNaN(new Date(req.user.birthdate))) {
        return res.status(401).send("Invalid birthdate.");
    }
    const valid = verifyAge(req.user.birthdate);
    if (!valid) {
        return res.status(401).send("Only children less than 10 years old is allowed.");
    }
    next();
}
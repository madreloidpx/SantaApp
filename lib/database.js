import NodeCache from "node-cache";
import config from '../config.js';
const { CHILD_REQUEST_LIST_KEY } = config;

//not really a database database since it's saving from cache. 

const cacheDb = new NodeCache();

export async function saveChildRequest(req, res, next) {
    try {
        const childRequest = {
            username: req.user.username,
            address: req.user.address,
            request: req.body.wish,
        };
        await saveChildRequestToCache(childRequest);
        next();
    } catch (err) {
        return res.status(500).send(err);
    }
}

const saveChildRequestToCache = (childRequest) => {
    return new Promise((resolve, reject) => {
        const ongoing = cacheDb.get(CHILD_REQUEST_LIST_KEY);
        try {
            let newList = ongoing ? ongoing.data : [];
            newList.push(childRequest);
            const success = cacheDb.set(CHILD_REQUEST_LIST_KEY, { data: newList }, 300);
            if (!success) return reject("Letter lost in transit.");
            console.log("Added to list:", newList);
            return resolve();
        } catch (err) {
            return reject(err);
        }
    });
};

export const getCurrentRequests = () => {
    const requestList = cacheDb.get(CHILD_REQUEST_LIST_KEY);
    return requestList ? requestList.data : undefined;
}
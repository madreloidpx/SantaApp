import { Router } from 'express';
import { fetchUserData, verifySantaRequirements } from '../middleware/userAuth.js';
import { check } from 'express-validator';
import { saveChildRequest } from '../lib/database.js';

const router = Router();
router.use(
    check('userid').isLength({ max: 20 }).trim().escape(),
    check('wish').isLength({ max: 100 }).trim().escape(),
    fetchUserData,
    verifySantaRequirements);

router.post('/send', saveChildRequest, sendMessageToSanta);

function sendMessageToSanta(req, res, next) {
    return res.status(200).send("Your letter has been sent to Santa!");
}

export default router;
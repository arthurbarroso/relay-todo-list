import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../config/auth';
import { userIdInterface } from './userIdInterface';

export default async function getUserId(req: userIdInterface) {
    const headers = req.req.headers.authentication;
    if (!headers) {
        throw new Error('No authentication header found for that request');
    }

    const [, token] = headers.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        return decoded.id;
    } catch (err) {
        throw new Error('Authentication failed');
    }
}

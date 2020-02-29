import { hash } from 'bcryptjs';

export default function passwordHash(password) {
    if (password.length < 4) {
        throw new Error('Passwords must be at least 4 characters long');
    }

    return hash(password, 10);
}

import * as http from 'http';

export default function handler(req: http.IncomingMessage, res: http.ServerResponse) {
    res.status(200).json({ message: 'Bonjour!' });
}
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId,title, tags, content } = req.body;
        

        res.status(201).json({ message: 'Post criado com sucesso', userId,title, tags, content });
    } else {
        res.status(404).json({ message: 'Endpoint não encontrado' });
    }
}

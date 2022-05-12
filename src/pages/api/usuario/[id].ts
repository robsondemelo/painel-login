import type { NextApiRequest, NextApiResponse } from 'next';

export default (
    req: NextApiRequest,
    res:NextApiResponse
    ) =>{

        if(req.method === 'GET'){


        return res.status(200).json({id: req.query.id});
        }

        return res.status(404).json({response:'invalido'});
}

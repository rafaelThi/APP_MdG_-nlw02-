import { Request, Response } from 'express'


import db from '../DataBase/connection';
 
 
 export default class gamesController{ 
    async index(request: Request, response: Response){
        const filters = request.query;
        
        const platform = filters.platform as string
        const state = filters.state as string
        const generous = filters.generous as string
        
        if(!filters.platform || !filters.state || !filters.generous){
            return response.status(400).json({
                error:'Preencha todo os Campos'
            })
        }
        console.log('deu certo')

        const games = await db('games')
          
            .where('games.platform', '=', platform )
            .join( 'users', 'games.user_id', '=', 'users.id')
            .select(['games.*', 'users.*'])

            .where('games.state', '=', state )

            .where('games.generous', '=', generous )
            
         return response.json(games);
    }
     async create(request: Request, response: Response){
    const {
        nameSalesman,
        city,
        whatsapp,
        nameGame,
        photo,
        platform,
        state,
        generous,
        cost,
        bio
    } =  request.body;

    const trx = await db.transaction();

    try{
        const insertUserId = await trx('users').insert({
            nameSalesman,
            city,
            whatsapp
    
        });
    
        const user_id = insertUserId[0];
    
        await trx('games').insert({
            nameGame,
            photo,
            platform,
            state,
            generous,
            cost,
            bio,
            user_id
        })
    
        await trx.commit();
        
        return response.status(201).send('Cadastrado com Sucesso');
    
    } catch (err){

        await trx.rollback();

        console.log(err)
        return response.status(400).json({
            error: 'Erro no Cadastro'
        })
    }
    
}
 }
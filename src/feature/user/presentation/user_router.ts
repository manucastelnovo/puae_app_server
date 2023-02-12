import express, { Request, Response } from "express";
import { UserRepositories } from "../domain/repositories/user_repositories";
import { User } from "../domain/models/User";


export default function UsersRouter(usersRepository:UserRepositories){
    const router = express.Router();

    router.get('/:name', async (req: Request, res:Response)=>{

        try {
          const resUser = await usersRepository.getUser(req.params.name);
          res.send(resUser);
        } catch (error) {
          throw (error)
        }
      });
    
    router.post("/register", async (req: Request, res: Response) => {
        const router = express.Router();
        try {
          console.log(req.body);
            const newUser= req.body as User
            await usersRepository.createUser(newUser);
            res.status(201).send(newUser);
        } catch (err) {
            throw(err);
        }
    });
    return router;
}
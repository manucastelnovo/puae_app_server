import express, { Request, Response } from "express";
import { FoodRepositories } from "../domain/repositories/food_repositories";
import { Food } from "../domain/models/food";
import { NotFoundError } from "./../../../core/error/not_fount_error";


export default function FoodsRouter(foodsRepository:FoodRepositories){
    const router = express.Router();

    router.get('/:userId', async (req: Request, res:Response)=>{

        try {   
          const userId = parseInt(req.params.userId)
          console.log(userId)
          const resFood = await foodsRepository.getAllFood(userId);
          res.send(resFood);
        } catch (error) {
          throw (error)
        }
      });
    
    router.post("/", async (req: Request, res: Response) => {
        const router = express.Router();
        try {
          console.log(req.body);
            const newFood= req.body as Food
            await foodsRepository.createFood(newFood);
            res.status(201).send(newFood);
        } catch (err) {
            throw new NotFoundError(err as string);
        }
    });
    return router;
}
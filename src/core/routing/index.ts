import express, {Application} from "express"
import { foodsRouter } from "../../feature/food/presentation";
import {usersRouter} from '../../feature/user/presentation'

export const configureRouting =(app:Application)=>{

    const router = express.Router();
    app.use('/api',router);
    router.use('/users',usersRouter)
    router.use('/foods',foodsRouter)
    
};
import { Request, Response } from "express";
import {UserRepositoriesImplementation} from './../../domain/repositories/user_repository_implementation'
import { pool } from "./../../../../core/service/database_service";
import { PGUsersDataSource } from './../../../user/data/data_source/data_source';

const usersDataSource = PGUsersDataSource.create(pool);
const usersRepository = UserRepositoriesImplementation.create(usersDataSource);

export const signup = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("signup");
};

export const signin = async (req: Request, res: Response) => {
  try {
    const resUser = await usersRepository.getUser('1');
    console.log(resUser);
    res.json(resUser);
    
  } catch (error) {
    console.log(error);
  }
};

export const profile = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("profile");
};

export const user = async (req: Request, res:Response)=>{

  try {
    const resUser = await usersRepository.getUser('1');
    res.send(resUser);
  } catch (error) {
    throw (error)
  }
}

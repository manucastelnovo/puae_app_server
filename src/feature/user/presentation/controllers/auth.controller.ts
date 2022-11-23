import { Request, Response } from "express";
import { userRepositoriesImplementationProvider } from "./../../data/repositories/user_repository_implementation";
import { User } from "feature/user/domain/models/User";

export const signup = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("signup");
};

export const signin = async (req: Request, res: Response) => {
  try {
    const resUser = await userRepositoriesImplementationProvider.getUser();
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

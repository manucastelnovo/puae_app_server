import { Request, Response } from "express";
import { userRepositoriesImplementationProvider } from "./../../data/repositories/user_repository_implementation";
import { User } from "feature/user/domain/models/User";

export const signup = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("signup");
};

export const signin = (req: Request, res: Response) => {
  const resUser = userRepositoriesImplementationProvider.getUser();
  res.send(resUser);
};

export const profile = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("profile");
};

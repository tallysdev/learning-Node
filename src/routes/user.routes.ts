import { Router } from "express";
import { CreateUserController } from "../modules/users/userCase/createUser/CreateUserController";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);


export { userRoutes };
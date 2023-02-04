import { Router } from "express";
const router: Router = Router();
import { signup, signin, profile,user } from "./../controllers/auth.controller";
router.post("/signup", signup);
router.get("/signin", signin);
router.get("/profile", profile);
router.get('/user',user)
export default router;

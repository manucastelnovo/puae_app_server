import { Router } from "express";
const router: Router = Router();
import { signup, signin, profile } from "./../controllers/auth.controller";
router.post("/signup", signup);
router.get("/signin", signin);
router.get("/profile", profile);
export default router;

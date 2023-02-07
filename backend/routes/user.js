import express from "express";
const router = express.Router();

import { signin, signup, verify } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/verify/:id/:token", verify);

export default router;

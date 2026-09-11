import express from "express";
import { routeThree } from "../controllers/aizelleController.js";

const router = express.Router();
router.get("/", routeThree);

export default router;
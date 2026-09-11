import express from "express";
import { routeTwo } from "../controllers/aizelleController.js";

const router = express.Router();
router.get("/", routeTwo);

export default router;
import express from "express";
import { routeOne } from "../controllers/aizelleController.js";

const router = express.Router();
router.get("/", routeOne);

export default router;
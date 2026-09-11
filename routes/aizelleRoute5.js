import express from "express";
import { routeFive } from "../controllers/aizelleController.js";

const router = express.Router();
router.get("/", routeFive);

export default router;
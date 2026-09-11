import express from "express";
import { routeFour } from "../controllers/aizelleController.js";

const router = express.Router();
router.get("/", routeFour);

export default router;
import express from "express";
import {
dashboard
} from "../services/shopify/dashboard.js";
import "colors";
const router = express.Router();



router.get("/dashboard", dashboard);

export default router;

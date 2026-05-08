import express from "express";
import { geocodeSearch } from "../controller/geocode.controller.js";

const router = express.Router();

router.get("/", geocodeSearch);

export default router;

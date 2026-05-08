import express from "express";
import { createReport,
    getReports,
    updateReportStatus 
} from "../controller/report.controller.js";
import upload from "../middelware/upload.middleware.js";
// import { updateReportStatus } from "../controller/report.controller.js";
    
const router = express.Router();

router.post("/", upload.single("image"), createReport);
router.get("/", getReports);
router.patch("/:id/status",updateReportStatus);

export default router;
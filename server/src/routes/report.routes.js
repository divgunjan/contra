import express from "express";
<<<<<<< HEAD
import { createReport, 
    updateReportStatus, 
    getReports} from "../controller/report.controller.js";
import upload from "../middelware/upload.middleware.js";

const router = express.Router();

router.post("/", upload.single("image"), createReport);
router.get("/",getReports);
=======
import { createReport,
    getReports,
    updateReportStatus 
} from "../controller/report.controller.js";
import upload from "../middelware/upload.middleware.js";
// import { updateReportStatus } from "../controller/report.controller.js";
    
const router = express.Router();

router.post("/", upload.single("image"), createReport);
router.get("/", getReports);
>>>>>>> b25d31a06369e67be17e7408f6bcdf1ecd288c86
router.patch("/:id/status",updateReportStatus);

export default router;


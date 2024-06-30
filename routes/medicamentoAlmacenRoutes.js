import {getAllMedAlm} from "../controllers/medicamentoAlmacenController.js";
import express from "express";


const router = express.Router();

router.get('/',getAllMedAlm);

export default router;




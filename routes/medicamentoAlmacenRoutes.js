import {getAllMedAlm, getMedAlmById} from "../controllers/medicamentoAlmacenController.js";
import express from "express";


const router = express.Router();

router.get('/',getAllMedAlm);
router.get('/:id',getMedAlmById)


export default router;




import medicamentoController from "../controllers/medicamentoController.js";
import express from "express"

const router = express.Router();


router.get('/', medicamentoController.getAllmedicamentos);


export default router;
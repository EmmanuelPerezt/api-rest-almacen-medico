import medicamentoController, { deleteMedicamento, updateMedicamento } from "../controllers/medicamentoController.js";
import express from "express"
const router = express.Router();


router.get('/', medicamentoController.getAllmedicamentos);
router.get('/:id', medicamentoController.getbyid);
router.post('/',medicamentoController.create);
router.put("/:id",updateMedicamento)
router.delete("/:id",deleteMedicamento)



export default router;
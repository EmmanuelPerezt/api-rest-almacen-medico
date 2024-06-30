import { createCategorias, deleteCategorias, getAllCategorias, updateCategorias } from "../controllers/categoriasController.js";
import express from "express";

const router =express.Router()


router.get('/',getAllCategorias);
router.post('/',createCategorias)
router.delete('/:id',deleteCategorias)
router.put('/:id',updateCategorias)



export default router;



;
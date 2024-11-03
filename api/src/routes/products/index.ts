import { Router } from "express";
import { listProducts,getProductById,createProduct,deleteProduct,updateProduct } from "./productsController";
// router for produts

const router = Router();

//products end points
router.get("/", listProducts);
router.get("/:id", getProductById);
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id',deleteProduct)

export default router
import { Router } from 'express';
import withTryCatch from '../../decorators/MWErrorDecorator';
import { getAllProducts, getProduct } from '../../controllers/productController';

const router = Router();

router.get("/", withTryCatch(getAllProducts));
router.get("/:id", withTryCatch(getProduct));

export default router;
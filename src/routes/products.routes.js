import { Router } from "express";
import { getAll, getOne, insertOne,updateOne,deleteOne, mostrarPaginaRopa, mostrarPaginaPrincipal, mostrarPaginaAgregar
} from "../controller/products.controller.js";

const router = Router();

// Ruta para obtener todos los productos
router.get('/', getAll);

// Ruta para obtener un solo producto por código de barras
router.get('/:productCode', getOne);

// Ruta para insertar un producto
router.post('/', insertOne);

// Ruta para actualizar un producto
router.post("/:productCode", updateOne)

// Ruta para eliminar un producto
router.get("/deleteOne/:productCode", deleteOne);

router.get('/ropa/vista', mostrarPaginaRopa);

router.get('/', mostrarPaginaPrincipal);

router.get('/ropa/agregar', mostrarPaginaAgregar);

export default router;

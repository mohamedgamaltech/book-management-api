import { Router } from "express";
import { BookController } from "../controllers/book.controller";

const router = Router();

router.get("/books", BookController.getAllBooks);
router.get("/books/:id", BookController.getBookById);
router.post("/books", BookController.createBook);
router.put("/books/:id", BookController.updateBook);
router.delete("/books/:id", BookController.deleteBook);

export default router;
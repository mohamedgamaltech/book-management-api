import { Request, Response, NextFunction } from 'express';
import { BookService } from '../services/book.service';

export class BookController {
  static getAllBooks(req: Request, res: Response, next: NextFunction) {
    BookService.getAllBooks(req, res, next);
  }

  static getBookById(req: Request, res: Response, next: NextFunction) {
    BookService.getBookById(req, res, next);
  }

  static createBook(req: Request, res: Response, next: NextFunction) {
    BookService.createBook(req, res, next);
  }

  static updateBook(req: Request, res: Response, next: NextFunction) {
    BookService.updateBook(req, res, next);
  }

  static deleteBook(req: Request, res: Response, next: NextFunction) {
    BookService.deleteBook(req, res, next);
  }
}

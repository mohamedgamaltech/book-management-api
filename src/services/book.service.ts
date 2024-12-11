import { CustomError } from '../utils/CustomError';
import { BookRepository } from '../repositories/book.repository';

export class BookService {
  static async getAllBooks(req: any, res: any, next: Function) {
    try {
      const books = await BookRepository.findAll();
      res.json(books);
    } catch (err) {
      next(err);
    }
  }

  static async getBookById(req: any, res: any, next: Function) {
    const { id } = req.params;
    try {
      const book = await BookRepository.findById(Number(id));
      if (!book) {
        throw new CustomError('Book not found',404);
      }
      res.json(book);
    } catch (err) {
      next(err);
    }
  }

  static async createBook(req: any, res: any, next: Function) {
    try {
      const newBook = await BookRepository.create(req.body);
      res.status(201).json(newBook);
    } catch (err) {
      next(err);
    }
  }

  static async updateBook(req: any, res: any, next: Function) {
    const { id } = req.params;
    try {
      const updatedBook = await BookRepository.update(Number(id), req.body);
      if (!updatedBook) {
        throw new CustomError('Book not found',404);
      }
      res.json(updatedBook);
    } catch (err) {
      next(err);
    }
  }

  static async deleteBook(req: any, res: any, next: Function) {
    const { id } = req.params;
    try {
      const book = await BookRepository.delete(Number(id));
      if (!book) {
        throw new CustomError('Book not found',404);
      }
      res.json({ message: 'Book was successfully deleted' });
    } catch (err) {
      next(err);
    }
  }
}

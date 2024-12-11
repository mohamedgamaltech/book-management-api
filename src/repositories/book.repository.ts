import { Repository } from "typeorm";
import { Book } from "../entities/Book";
import { AppDataSource } from "../config/db";

export class BookRepository {
  private static repo: Repository<Book> = AppDataSource.getRepository(Book);

  static async findAll(): Promise<Book[]> {
    return this.repo.find();
  }

  static async findById(id: number): Promise<Book | null> {
    return this.repo.findOneBy({ id });
  }

  static async create(book: Book): Promise<Book> {
    return this.repo.save(book);
  }

  static async update(id: number, data: Partial<Book>): Promise<Book | null> {
    const book = await this.findById(id);
    if (!book) return null;
    return this.repo.save({ ...book, ...data });
  }

  static async delete(id: number): Promise<Book | null> {
    const book = await this.findById(id);
    if (!book) return null;
    await this.repo.delete(id);
    return book;
  }
}


import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book } from "../entities/Book";
import dotenv from "dotenv";

dotenv.config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "bookstore",
  synchronize: true, // Automatically creates tables in development
  logging: true,
  entities: [Book],
});  

// Initialize the database connection
export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection failed!', error);
  }
};
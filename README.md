# book-management-api
This is a simple Book management API built with **Express.js**, **TypeScript**, **PostgreSQL**, and **TypeORM**.

## Features

- **CRUD** operations for books.
- Built with **best practices**.
- Uses **PostgreSQL** for data persistence.
- Written in **TypeScript** for type safety.
- Implements **middleware** for error handling and logging.

## Requirements

Before getting started, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **PostgreSQL**
- **TypeScript** 

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohamedgamaltech/book-management-api.git
   cd book-management-api

2. **Install dependencies**:
    ```bash
    npm install

3. **Set up PostgreSQL**:
    ```bash
    Create a PostgreSQL database:

    psql -U postgres
    CREATE DATABASE bookstore;
    \q


4. **Environment Variables**:
    ```bash
    Make sure to set the following environment variables in your .env file:

    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=your_password
    DB_NAME=bookstore
    PORT=3000

5. **Available Scripts**:
    ```bash
    npm run dev
    Runs the development server with ts-node-dev, allowing hot reloading. This is useful for development purposes.
   
    npm run build
    Compiles the TypeScript code to the dist directory. This is the production-ready code.

    npm run start
    Starts the application from the compiled JavaScript files in the dist directory.


## API Endpoints
1. **Create a new book**
    ```bash
    Endpoint: POST /api/books
    Request Body:
    {
    "title": "Book Title",
    "author": "Book Author",
    "publishedDate": "2023-01-01",
    "numberOfPages": 320
    }

Response:

    {
      "id": 1,
      "title": "Book Title",
      "author": "Book Author",
      "publishedDate": "2023-01-01",
      "numberOfPages": 320
    }

2. **Get all books**
    ```bash
    Endpoint: GET /api/books
    Response:

    [
      {
        "id": 1,
        "title": "Book Title",
        "author": "Book Author",
        "publishedDate": "2023-01-01",
        "numberOfPages": 320
      },
      ...
    ]

3. **Get a book by ID**
    ```bash
    Endpoint: GET /api/books/:id
    Response:

    {
      "id": 1,
      "title": "Book Title",
      "author": "Book Author",
      "publishedDate": "2023-01-01",
      "numberOfPages": 320
    }

4. **Update a book**
    ```bash
    Endpoint: PUT /api/books/:id
    Request Body:

    {
    "title": "Updated Book Title",
    "numberOfPages": 200
    }

Response:

    {
      "id": 1,
      "title": "Updated Book Title",
      "author": "Updated Author",
      "publishedDate": "2023-02-01",
      "numberOfPages": 200
    }

5. **Delete a book**
    ```bash
    Endpoint: DELETE /api/books/:id
    Response:
        200 Book was successfully deleted.


## Project Structure


### Description of Folders:

- **/src**: 
  - **/controllers**: Contains functions that handle HTTP requests and send responses.
  - **/services**: Contains the business logic and interacting with databases.
  - **/repositories**: This folder would have TypeORM repository classes responsible for CRUD operations on the database.
  - **/middleware**: Contains middleware for error handling and request validation.
  - **/entities**: Defines the TypeORM entities that map to PostgreSQL database tables.
  - **/routes**: Contains all the route definitions and associates controllers to those routes.
- **/dist**: This folder contains the compiled JavaScript code, which is the result of building the TypeScript files.

- **.env**: Environment variables that are used for the configuration of the application, such as database credentials.

- **tsconfig.json**: TypeScript configuration that defines how the TypeScript code should be compiled.

- **package.json**: Defines the project's dependencies, scripts, and metadata.

- **README.md**: This file, which contains the documentation for the project.
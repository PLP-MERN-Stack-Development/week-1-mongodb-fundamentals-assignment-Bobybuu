# 📚 PLP Bookstore MongoDB Project

This project demonstrates MongoDB fundamentals through a simulated bookstore database. It covers CRUD operations, advanced queries, aggregations, and indexing.

## 📦 Files Included

- `insert_books.js`: Populates the database with 12 books.
- `queries.js`: MongoDB queries covering CRUD, filters, projections, aggregations, and indexes.
- `screenshot.png`: Shows the `plp_bookstore` database and `books` collection in MongoDB Compass.
- `README.md`: Project instructions and usage guide.

## 🚀 How to Run

### Requirements
- MongoDB installed locally (`mongod`, `mongosh`)
- MongoDB Compass (optional, for GUI)
- Node.js (for running `insert_books.js`)

### Steps

1. **Start MongoDB server:**
   ```bash
   mongod

2.Run the insert script to populate your DB:
node insert_books.js

3.Launch MongoDB Shell:
mongosh

4.Use the bookstore database:
use plp_bookstore;

5.Run queries from queries.js one by one or paste the entire file into the shell.

use plp_bookstore;

/* ------------------ Basic CRUD Operations ------------------ */

// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year (e.g., 2000)
db.books.find({ published_year: { $gt: 2000 } });

// 3. Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book (e.g., "1984")
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.49 } }
);

// 5. Delete a book by its title (e.g., "Animal Farm")
db.books.deleteOne({ title: "Animal Farm" });


/* ------------------ Advanced Queries ------------------ */

// 6. Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 7. Use projection to return only the title, author, and price fields
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 8. Sort books by price in ascending order
db.books.find().sort({ price: 1 });

// 9. Sort books by price in descending order
db.books.find().sort({ price: -1 });

// 10. Pagination — Page 1 (5 books)
db.books.find().skip(0).limit(5);

// 11. Pagination — Page 2 (next 5 books)
db.books.find().skip(5).limit(5);


/* ------------------ Aggregation Pipeline ------------------ */

// 12. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// 13. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// 14. Group books by decade
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


/* ------------------ Indexing ------------------ */

// 15. Create index on the title field
db.books.createIndex({ title: 1 });

// 16. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 17. Use explain() to analyze performance (example)
db.books.find({ title: "1984" }).explain("executionStats");

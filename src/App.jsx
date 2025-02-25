import React from "react";
import BookCard from "./components/bookcard";

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
  { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  { title: "Moby Dick", author: "Herman Melville", genre: "Adventure", year: 1851 }
];

const App = () => {
  return (
    <div>
      <h1>Digital Library</h1>
      <div className="book-container">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;

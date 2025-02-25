import React, { useState } from "react";
import "./BookCard.css"; // Import CSS file

const BookCard = ({ book }) => {
  // Define an array of colors
  const colors = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)", 
    "linear-gradient(135deg, #6a11cb, #2575fc)", 
    "linear-gradient(135deg, #ff758c, #ff7eb3)", 
    "linear-gradient(135deg, #fddb92, #d1fdff)"
  ];

  // State to track background color
  const [bgColor, setBgColor] = useState(colors[0]);

  // Function to change color when clicked
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className="book-card" style={{ background: bgColor }} onClick={changeColor}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
    </div>
  );
};

export default BookCard;

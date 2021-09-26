import React, { useState } from "react";
import AddCart from "../AddCart/AddCart";
import Author from "../Author/Author";
import "./AuthorList.css";

const AuthorList = () => {
  const [Authors, setAuthor] = useState([]);
  fetch("./AuthorList.JSON")
    .then((res) => res.json())
    .then((data) => setAuthor(data));
  
  const [addAuthor, setAddAuthor] = useState([]);
   const authorAddToCart = (author) => {
     const newCart = [...addAuthor, author];
     setAddAuthor(newCart);
   };
  return (
    <div className="container">
      <div className="author-list">
        {Authors.map((author) => (
          <Author authorAddToCart={authorAddToCart} author={author}></Author>
        ))}
      </div>
      <div className="added-list">
        <AddCart
          addAuthor={addAuthor}
        ></AddCart>
      </div>
    </div>
  );
};

export default AuthorList;

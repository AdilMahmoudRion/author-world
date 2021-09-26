// creat author list
import React, { useEffect, useState } from "react";
import AddCart from "../AddCart/AddCart";
import Author from "../Author/Author";
import "./AuthorList.css";

const AuthorList = () => {
  // us state declare
  const [Authors, setAuthor] = useState([]);
  useEffect(() => {
    fetch("./AuthorList.JSON")
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, []);
    
  // function of button
  const [addAuthor, setAddAuthor] = useState([]);
   const authorAddToCart = (author) => {
     const newCart = [...addAuthor, author];
     setAddAuthor(newCart);
   };
  return (
    <div className="container">
      <div className="author-list">
        {Authors.map((author) => (
          <Author
            key={author.author}
            authorAddToCart={authorAddToCart}
            author={author}
          ></Author>
        ))}
      </div>
      <div className="added-list">
        <AddCart addAuthor={addAuthor}></AddCart>
      </div>
    </div>
  );
};

export default AuthorList;

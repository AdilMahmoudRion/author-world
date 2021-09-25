import React from "react";
import "./Author.css";

const Author = (props) => {
  const { author, nationality, language, numberOfBooks, salary } = props.author;
  return (
    <div className="Author">
      <div>
        <h1>Author: {author}</h1>
        <h4>Nationality: {nationality}</h4>
        <h4>language: {language}</h4>
        <h5>NumberOfBooks: {numberOfBooks}</h5>
        <h5>Salary: {salary}</h5>
      </div>
    </div>
  );
};

export default Author;

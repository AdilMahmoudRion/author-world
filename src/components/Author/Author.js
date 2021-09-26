import React from "react";
import "./Author.css";

const Author = (props) => {
  const { author, nationality, language, numberOfBooks, salary,img } = props.author;
  return (
    <div className="Author">
      <div className="image-div">
        <img className="image" src={img} alt="" />
      </div>
      <div>
        <table>
          <th className="heading">{author}</th>
        </table>
        <table>
          <tr>
            <td className="table-data">Nationality</td>
            <td>: {nationality}</td>
          </tr>

          <tr>
            <td className="table-data">language</td>
            <td>: {language}</td>
          </tr>
          <tr>
            <td>NumberOfBooks</td>
            <td>: {numberOfBooks}</td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>: {salary}</td>
          </tr>
        </table>
        <button
          className="button"
          onClick={() => props.authorAddToCart(props.author)}
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Author;

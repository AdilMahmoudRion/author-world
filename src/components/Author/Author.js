import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Author.css";


const Author = (props) => {

  const { author, nationality, language, numberOfBooks, salary, img } = props.author;
  const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;

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
            <td>: ${salary}</td>
          </tr>
        </table>
        <button
          className="button"
          onClick={() => props.authorAddToCart(props.author)}
        >
          {shoppingCart}Hire Now
        </button>
      </div>
    </div>
  );
};

export default Author;

// view single author details 
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import "./Author.css";

const Author = (props) => {
  const { author, nationality, language, numberOfBooks, salary, img } =
    props.author;
  const user = <FontAwesomeIcon  className="icon" icon={faUserAlt} />;

  return (
    <div className="Author">
      <div className="image-div">
        <img className="image" src={img} alt="" />
      </div>
      <div>
        <p className="heading">{author}</p>
        <div>
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <button
          className="button"
          onClick={() => props.authorAddToCart(props.author)}
        >
          {user}Hire Now
        </button>
      </div>
    </div>
  );
};

export default Author;

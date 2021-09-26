import React from "react";
import HiredAuthor from "../HiredAuthor/HiredAuthor";
import "./AddCart.css";

const AddCart = (props) => {
  const { addAuthor } = props;
  let total = 0;
  for (const salaries of addAuthor) {
    total = total + salaries.salary;
  }
  return (
    <div>
      <div className="cart">
        <div className="cart-header">
          <h3 className="add-list">Budget count</h3>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Total selected: </th>
                <td>{props.addAuthor.length}</td>
              </tr>
              <tr>
                <th>Total Salary: </th>
                <td>${total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cart addedAuthor">
        <h3 className="add-list selected-person">Selected person</h3>
        {addAuthor.map((addedAuthor) => (
          <HiredAuthor
            key={addedAuthor.author}
            addedAuthor={addedAuthor}
          ></HiredAuthor>
        ))}
      </div>
    </div>
  );
};

export default AddCart;

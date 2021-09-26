import React from 'react';
import './AddCart.css'

const AddCart = (props) => {
    const { addAuthor } = props;
    let total = 0;
    for (const salaries of addAuthor) {
        total = total + salaries.salary;
    }
    return (
      <div className="cart">
        <div className="cart-header">
            <h3 className="add-list">Add List</h3>
          <table>
            <tr>
              <th>Selected person: </th>
              <td>{props.addAuthor.length}</td>
            </tr>
            <tr>
              <th>Total Salary: </th>
              <td>${total}</td>
            </tr>
          </table>
        </div>
        <div>

        </div>
      </div>
    );
};

export default AddCart;
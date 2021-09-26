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
        <table>
          <tr>
            <th>Company: </th>
            <td>{props.addAuthor.length}</td>
          </tr>
          <tr>
            <th>Total: </th>
            <td>{total}</td>
          </tr>
        </table>
      </div>
    );
};

export default AddCart;
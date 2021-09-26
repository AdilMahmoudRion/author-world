import React from 'react';

const AddCart = (props) => {
    const { addAuthor } = props;
    let total = 0;
    for (const salaries of addAuthor) {
        total = total + salaries.salary;
    }
    return (
      <div>
            <h1>adil:{props.addAuthor.length}</h1>
            <h3>Total: {total}</h3>
      </div>
    );
};

export default AddCart;
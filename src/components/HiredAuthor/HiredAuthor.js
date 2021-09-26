import React from 'react';
import './HiredAuthor.css';

const HiredAuthor = (props) => {
    const { author, img, salary} = props.addedAuthor
    
    return (
      
        <div className="hired-author">
          <div>
            <img className="img" src={img} alt="" />
          </div>
          <div>
            <div>
              <p>{author}</p>
              <p>${salary}</p>
            </div>
          </div>
        </div>
      
    );
};

export default HiredAuthor;
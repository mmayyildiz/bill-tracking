import React from 'react';
import './style.css';

const Message = ({msg}) => {
    return (
        <div>
          <h3 className="message">{msg}</h3>
        </div>
      );
}

export default Message;
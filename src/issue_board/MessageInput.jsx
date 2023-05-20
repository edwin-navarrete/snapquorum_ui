import React, { useState } from 'react';

function MessageInput({ onSendMessage }) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSendMessage(text);
    setText('');
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} placeholder="Type a message" />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageInput;

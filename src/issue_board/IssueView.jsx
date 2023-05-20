import React, { useState } from 'react';
import SubjectView from './SubjectView'
import ConsensusListView from './ConsensusListView'
import MessageInput from './MessageInput'

function IssueName() {
  const [messages, setMessages] = useState([]);

  function handleSendMessage(text) {
    const newMessage = {
      id: messages.length,
      text: text,
      timestamp: Date.now(),
      author: 'me'
    };

    setMessages([...messages, newMessage]);
  }
  return (
    < div className="chat" >
      <SubjectView></SubjectView>
      <ConsensusListView messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div >
  );
}

export default IssueName;

/*
    <IssueContext.Provider value={{subject:"from initial value"}}>
      <div className="chat">
        <SubjectView></SubjectView>
        <ConsensusListView messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </IssueContext.Provider>
*/
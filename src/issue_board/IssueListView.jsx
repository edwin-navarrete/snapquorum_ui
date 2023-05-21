import React, { useState } from 'react';

function IssueItem({ text }) {
  return (
    <div className="item">
      <span className="item-text">{text}</span>
      <a href='http://localhost:3000/issue/324/comment' className="item-button"><i class="fas fa-share-alt"></i></a>
      <a href='http://localhost:3000/issue/123/consensus' className="item-button"><i class="far fa-comments"></i></a>
    </div>
  );
}

function IssueList() {
    const [items, setItems] = useState(['¿Cuál es su principal preocupación con respecto al problema de las fachadas y cubiertas?']);
    const [newItemText, setNewItemText] = useState('');
  
    const addItem = () => {
      if (newItemText) {
        setItems(prevItems => [...prevItems, newItemText]);
        setNewItemText('');
      }
    };
  
    return (
      <div class="issue-list">
        <div class="container">
            <h1><i class="fas fa-comments"></i>Asuntos</h1>
    
            <div className="item-list">
            {items.map((item, index) => (
                <IssueItem key={index} text={item} />
            ))}
            </div>
    
            <div className="toolbar">
            <input
                type="text"
                placeholder='Describe el asunto aquí...'
                value={newItemText}
                onChange={e => setNewItemText(e.target.value)}
            />
            <button onClick={addItem}><i class="fas fa-plus"></i></button>
            </div>
        </div>
      </div>
    );
  }
  
  export default IssueList;
  
  
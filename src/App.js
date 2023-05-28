
import './App.css';
import './chat.css';
import Chat from './issue_board/ConsensusView';
import { Helmet } from 'react-helmet';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CommentView from './issue_board/CommentView';

function App() {
  return (
    <Router>
      <Helmet>
        <title>SnapQuorum</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"></link>
      </Helmet>      
      <Routes>
        <Route path="/issue/:id/comment" component={CommentView} />
        <Route path="/issue/:id/consensus" component={Chat} />
      </Routes>
    </Router>
  );
}


export default App;

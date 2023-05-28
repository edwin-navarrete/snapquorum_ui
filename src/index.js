import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConsensusView from './issue_board/ConsensusView';
import CommentView from './issue_board/CommentView';
import './base0.scss';
import './chat.css';
import './comment.scss';
import './issue_list.css';
import { Helmet } from 'react-helmet';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IssueListView from './issue_board/IssueListView';
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div>
        <Helmet>
          <title>SnapQuorum</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"></link>
        </Helmet>
      </div>,
  },
  {
    path: "/issue/:id/consensus",
    element: <ConsensusView />,
  },
  {
    path: "/issue",
    element: <IssueListView />,
  },
  {
    path: "/issue/:id/comment",
    element: <CommentView />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

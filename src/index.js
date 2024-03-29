import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthView from './issue_board/authenticateView'
import ConsensusView from './issue_board/ConsensusView';
import CommentView from './issue_board/CommentView';
import CommentShareView from './issue_board/CommentShareView';
import FatalErrorView from './issue_board/FatalErrorView';

import './base0.scss';
import './chat.css';
import './comment.scss';
import './authenticate.scss';
import './issue_list.css';
import { Helmet } from 'react-helmet';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IssueListView from './issue_board/IssueListView';
import GlobalContext from './GlobalContext';

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
        <GlobalContext.Provider>
          <CommentShareView></CommentShareView>
        </GlobalContext.Provider>        
      </div>,
  },
  {
    path: "/error",
    element: <FatalErrorView />,
  },
  {
    path: "/login",
    element: <AuthView />,
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
  {
    path: "/issue/:id/commentshare",
    element: <CommentShareView />,
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

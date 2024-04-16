import React from 'react';
import { useLocation } from 'react-router-dom';

const FatalErrorView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const error_msg = queryParams.get('error_msg');
  return (
    <div>
      <h1>Error Interno</h1>
      <p>Por favor contacte al soporte técnico indicando el siguiente error:</p>
      <p>{error_msg}</p>
    </div>
  );
};

export default FatalErrorView;
import React from 'react';
import { useParams } from 'react-router-dom';

const FatalErrorView = () => {
  const { error_msg } = useParams();
  return (
    <div>
      <h1>Error Interno</h1>
      <p>Por favor contacte al soporte técnico indicando el siguiente error:</p>
      <p>{error_msg}</p>
    </div>
  );
};

export default FatalErrorView;
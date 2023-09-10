import React, { useState } from 'react';
import getAxiosInstance from './axiosConfig';
import { useNavigate } from 'react-router-dom';

function AuthView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await getAxiosInstance().post('/login', { id: username, secret: password });
      localStorage.setItem('authToken', response.data);
      localStorage.setItem('user', username)
      const redirectUrl = new URLSearchParams(window.location.search).get("redirect") || "/";
      navigate(redirectUrl);
    } catch (error) {
      setErrorMessage('Credenciales incorrectas');
    }
  };

  return (
    <div className="auth-container">
      <h1><i className="far fa-user"/>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          name='username'
          autoComplete='on'
          className='auth-input'
          type="text"
          placeholder="Identificación"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name='password'
          className='auth-input'
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default AuthView;
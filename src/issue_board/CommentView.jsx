import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getAxiosInstance from './axiosConfig';

function CommentView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState('');

    const handleLoginRedirect = () => {
        const redirectUrl = window.location.pathname;
        window.location.href = `/login?redirect=${encodeURIComponent(redirectUrl)}`;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Token COMMENT ${localStorage.getItem('authToken')}`)
                const response = await getAxiosInstance().get(`/issues/${id}`);
                if (response.status === 200 && response.data.subject ) {
                    setSubject( response.data.subject );
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                if (error.response.status === 401){
                    debugger;
                    handleLoginRedirect();
                }
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
          message: message
        };
    
        try {
          const response = await getAxiosInstance().post(`/issues/${id}/comments`, data);
          if (response.status === 200) {
            console.log('Mensaje enviado correctamente');
            navigate(`/issue/${id}/consensus`);            
          } else {
            console.error('Error al enviar el mensaje');
          }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            if (error.response.status === 401){
                handleLoginRedirect();
            }
        }
      };

    return (
        <div className="comment-view">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h3><i className="far fa-comments"></i>{subject}</h3>
                    <div className="field" tabIndex="1">
                        <label htmlFor="message">
                            <i className="far fa-edit"></i> ({localStorage.getItem('user')}) Mi comentario: 
                        </label>
                        <textarea 
                            name="message" placeholder="Escriba aquí" required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="btn-container">
                        <button disabled={!message} type="submit">Enviar Mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default CommentView;

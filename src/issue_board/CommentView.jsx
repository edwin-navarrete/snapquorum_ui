import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GlobalContext from '../GlobalContext'

function CommentView() {
    const navigate = useNavigate();
    const { host } = useContext(GlobalContext);
    const { id } = useParams();
    const [subject, setSubject] = useState("");
    const [participant, setParticipant] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://${host}:5000/issues/${id}`);
                if (response.status === 200 && response.data.subject ) {
                    setSubject( response.data.subject );
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [host, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = {
          participant: participant,
          message: message
        };
    
        try {
          const response = await fetch(`http://${host}:5000/issues/${id}/comments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
    
          if (response.ok) {
            console.log('Mensaje enviado correctamente');
            navigate(`/issue/${id}/consensus`);            
          } else {
            console.error('Error al enviar el mensaje');
          }
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      };

    return (
        <div class="comment-view">
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <h3><i class="far fa-comments"></i>{subject}</h3>
                    <div class="field" tabindex="1">
                        <label for="participant">
                            <i class="far fa-user"></i>Tu identificación
                        </label>
                        <input 
                            type="text"
                            name="participant"
                            placeholder="Escribe tu identificación asignada" required
                            value={participant}
                            onChange={(e) => setParticipant(e.target.value)} ></input>
                    </div>
                    <div class="field" tabindex="3">
                        <label for="message">
                            <i class="far fa-edit"></i>Tu comentario
                        </label>
                        <textarea 
                            name="message" placeholder="Escriba aquí" required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                    </div>
                    <div class="btn-container">
                        <button disabled={!participant || !message} type="submit">Enviar Mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default CommentView;

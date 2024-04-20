import React, { useContext, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';

const CommentShareView = () => {
    const { id } = useParams();

    useEffect(() => {
        const handleLoginRedirect = () => {
            const redirectUrl = '/l';
            window.location.href = `/login?redirect=${encodeURIComponent('/issue')}`;
        }

        if (id === undefined) {
            handleLoginRedirect();
        }
    }, [id]); 

    const qrValue = `${window.location.origin}/issue/${id}/comment`; // URL o texto que deseas codificar en el código QR

    return (
        <div className="comment-share container">
            <div className="comment-rules">
                <h3>Para opinar visita:</h3>
                    {qrValue}
                <h3>Reglas para opinar:</h3>
                <i className="far fa-check-circle correct"></i>
                <ul>
                    <li>En Español</li>
                    <li>Serio y respetuoso</li>
                    <li>Menos de 150 palabras</li>
                </ul>
                <i className="far fa-times-circle incorrect"></i>
                <ul>
                    <li>Obscenidad o grosería</li>
                    <li>Ironía</li>
                    <li>Nombres propios</li>
                    <li>Enlaces, direcciones de correo, abreviaturas</li>
                    <li>Emoticones</li>
                </ul>
                
            </div>
            <div className="qr-code">
                <QRCode value={qrValue} size={400} />
            </div>
            
        </div>
    );
};

export default CommentShareView;

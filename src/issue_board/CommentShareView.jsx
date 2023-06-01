import React, { useContext } from 'react';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';
import GlobalContext from '../GlobalContext'

const CommentShareView = () => {
    const { host }  = useContext(GlobalContext);
    const { id } = useParams();

    const qrValue = `http://${host}:3000/issue/${id}/comment`; // URL o texto que deseas codificar en el código QR

    return (
        <div class="comment-share container">
            <div className="comment-rules">
                <h3>Para opinar visita:</h3>
                    {qrValue}
                <h3>Reglas para opinar:</h3>
                <i class="far fa-check-circle correct"></i>
                <ul>
                    <li>En Español</li>
                    <li>Serio y respetuoso</li>
                    <li>Menos de 150 palabras</li>
                </ul>
                <i class="far fa-times-circle incorrect"></i>
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

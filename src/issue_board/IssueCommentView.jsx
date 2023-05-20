import React from 'react';
import { useParams } from 'react-router-dom';

function IssueCommentView() {
  const { id } = useParams();

  return (
    <div class="comment-view">
        <div class="container">
            <form>
                <h3><i class="far fa-comments"></i>¿Cuál es su principal preocupación con respecto al problema de las fachadas y cubiertas?</h3>
                <div class="field" tabindex="1">
                    <label for="username">
                        <i class="far fa-user"></i>Tu identificación
                    </label>
                    <input name="username" type="text" placeholder="Número de apartamento" required></input>
                </div>
                <div class="field" tabindex="3">
                    <label for="message">
                        <i class="far fa-edit"></i>Tu comentario
                    </label>
                    <textarea name="message" placeholder="Escriba aquí" required></textarea>
                </div>
                <div class="btn-container">
                    <button type="reset">Enviar Mensaje</button>
                </div>
            </form>
        </div>
    </div>
  );
}


export default IssueCommentView;

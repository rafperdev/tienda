import React from 'react';
import portatil from './assets/portatil.jpeg';

export default function Productos(props) {
    return(
        <div key={props.nombre}>
          <div>
            <img src={portatil} />
          </div>
          <div>
            {props.nombre}
          </div>
          <div>
            {props.descripcion}
          </div>
          <div>
            {props.precio}
          </div>
        </div>
    )
}
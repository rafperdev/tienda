import React, { useState } from 'react';
import Productos from './Productos';

//JSX
export default function App() {
  const articulos = [
    {
      "nombre": "Portatil ACER",
      "descripcion": "Diseñada para ofrecer un rendimiento duradero, la ideapad v145 ofrece procesamiento potente y fluido con un diseño elegante y lijero.",
      "precio": 250
    },
    {
      "nombre": "Disco duro 500GB",
      "descripcion": "Disco duro de estado solido de 500GB",
      "precio": 100
    },
    {
      "nombre": "Disco duro 1TB",
      "descripcion": "Disco duro mecánico de 1TB. 1 mes de garantia",
      "precio": 80
    },
    {
      "nombre": "Raspberry Pi 3",
      "descripcion": "Kit Raspberry Pi 3, memoria, cargador, SD",
      "precio": 50
    }
  ];
  const [listaProducto, setListaProducto] = useState(articulos);

  const buscarProducto = (evento) => {
    setListaProducto(articulos.filter(p =>
      p.nombre.toLowerCase().includes(evento.target.value)
    ))
  }
  return (
    <div>
      {/* Barra de búsqueda */}
      <input type="text" placeholder="Buscar producto..." onChange={buscarProducto} />
      {/* Descripción de los productos */}

      {
        listaProducto.map(a =>
          <Productos 
            nombre={a.nombre} 
            descripcion={a.descripcion} 
            precio={a.precio}/>
          )
      }


    </div>
  )
}
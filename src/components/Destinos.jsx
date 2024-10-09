/*
Este módulo recorre la estructura del archivo destinos.json y devuelve un array de elementos web
de tipo <div>, donde cada uno contiene todos los datos de un destino turístico junto con un array
de imágenes representativas del mismo.

Cada elemento incluído en el <div> de un destino es identificado por una propiedad id, cuyo nombre
coincide con el nombre de la clave en el archivo JSON (nombre, descripcion, etc.), de esta forma sus
valores individuales pueden ser accedidos desde el módulo que recibe los objetos renderizados.
*/

import React from "react";
import json_destinos from "../datos/destinos.json";

const Destinos = () => {
  return (
    <div>
      {json_destinos.map((destino) => {
        return (
          <>
            <div id={destino.id}>
              <h1 id="nombre">{destino.nombre}</h1>
              <h2 id="descripcion">{destino.descripcion}</h2>
              <h3 id="categoria">{destino.categoria}</h3>
              <p id="referencia">{destino.referencia}</p>
              <p id="direccion">{destino.direccion}</p>
              <a
                id="enlace_google_maps"
                href={destino.enlace_google_maps}
                target="_blank"
              >
                Ver en Google Maps
              </a>
              {destino.imagenes.map((imagen) => {
                return <img src={imagen} alt="Imagen de referencia"></img>;
              })}
              <p id="horarios">{destino.horarios}</p>
              <a id="url" href={destino.url} target="_blank">
                Sitio Web
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Destinos;

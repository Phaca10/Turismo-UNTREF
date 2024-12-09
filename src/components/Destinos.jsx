/*
Este módulo recorre la estructura del archivo destinos.json y devuelve un array de elementos web
de tipo <div>, donde cada uno contiene todos los datos de un destino turístico junto con un array
de imágenes representativas del mismo.

Cada elemento incluído en el <div> de un destino es identificado por una propiedad id, cuyo nombre
coincide con el nombre de la clave en el archivo JSON (nombre, descripcion, etc.), de esta forma sus
valores individuales pueden ser accedidos desde el módulo que recibe los objetos renderizados.
*/

import React from "react";
// import json_destinos from "../datos/destinos.json";
const URL_SERVICIO_DESTINOS = "http://localhost:3008/destinos";

const Destinos = ({ nombre, categoria }) => {
  fetch(URL_SERVICIO_DESTINOS)
    .then((respuesta) => respuesta.json())
    .then((respuesta_destinos) => {
      console.log(
        "Número de objetos recuperados: " + respuesta_destinos.length
      );
      console.log(respuesta_destinos);
      console.log(respuesta_destinos[2].imagenes);

      return (
        <>
          {/* <div> */}
          {respuesta_destinos.map((destino) => {
            console.log(`destino=${destino}`);
            if (
              (nombre === "" && categoria === "") ||
              (nombre === "" &&
                destino.categoria.toLowerCase() === categoria) ||
              (destino.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !=
                -1 &&
                categoria === "") ||
              (destino.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !=
                -1 &&
                destino.categoria.toLowerCase() === categoria.toLowerCase())
            ) {
              return (
                <>
                  <div key={destino.id} id={destino.id}>
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
                      return (
                        <img
                          key={imagen}
                          src={imagen}
                          alt="Imagen de referencia"
                        ></img>
                        // <img src={imagen} alt="Imagen de referencia"></img>
                      );
                    })}
                    <p id="horarios">{destino.horarios}</p>
                    <a id="url" href={destino.url} target="_blank">
                      Sitio Web
                    </a>
                  </div>
                </>
              );
            }
          })}
          {/* </div> */}
        </>
      ); // return
    })
    .catch((error) => {
      console.error("Error al obtener destinos: " + error);
    });
};

export default Destinos;

import React from "react";
import "./Marker.css";

const Marker = (props: any) => {
  const { name, id, idSpecifique } = props; // récupération des props
  // id : assignation d'une id pour chaques marqueurs

  return (
    <div>
      <div
        className="pin bounce"
        style={{
          backgroundColor: id === idSpecifique ? "#3DDAEA" : "#0000ff",
          cursor: "pointer",
        }}
        title={name}
        onClick={() => {
          props.idRecup(
            id
          ); /* envoie de l'id du marker à cardMaps pour filtre */
        }}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;

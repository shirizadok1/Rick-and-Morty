import React, { useState } from "react";
import { Cube } from "../Cube";
import { Canvas } from "@react-three/fiber";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function CharacterItem({ item }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h1>{item.name}</h1>
      {selectedItem && (
        <Popup
          trigger={
            <button className="button">
              <span className="button-text">
                Click here for more information about {item.name}
              </span>
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> {item.name} </div>
              <div className="content">
                <span>
                  <strong>Actor Name:</strong> {item.name}
                  
                  <strong>Status:</strong> {item.status}
                  
                  <strong>Species:</strong> {item.species}
                  
                  <strong>Type:</strong> {item.type}
                  
                  <strong>gender:</strong> {item.gender}
                  
                  <strong>Location:</strong> {item.location.name}
                  
                  <strong>Number of episodes:</strong> {item.episode.length}
                  
                </span>
              </div>
              <div className="actions">
                <Popup position="top center"></Popup>
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                ></button>
              </div>
            </div>
          )}
        </Popup>
      )}

      <div>
        <Canvas>
          <Cube showInfo={setSelectedItem} position={[-1, 0, 3]} item={item} />
          <directionalLight
            color="#ffffff"
            intensity={1}
            position={[-1, 2, 4]}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default CharacterItem;

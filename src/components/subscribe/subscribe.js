import React from "react";
import styles from "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <p>
        Entérate de todos los eventos y <br /> publicaciones
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input placeholder="Ingresa tu email aquí" />
        <button type="submit">Suscribirme</button>
      </form>
    </div>
  );
};

export default Subscribe;

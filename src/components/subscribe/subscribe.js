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
        className="flex flex-col"
      >
        <input
          placeholder="Ingresa tu email aquí"
          className="my-5 p-2 text-black text-center placeholder-black rounded"
        />
        <button
          type="submit"
          className="bg-transparent text-white border-2 border-white p-2 rounded focus:outline-none hover:bg-white hover:text-black "
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
};

export default Subscribe;

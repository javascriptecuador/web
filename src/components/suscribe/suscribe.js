import React from "react";

const suscribe = () => {
  return (
    <div
      style={{ backgroundColor: "#FFBE00" }}
      className="flex flex-col lg:flex-row justify-around items-center py-24"
    >
      <p className="text-white text-2xl text-center font-bold">
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

export default suscribe;

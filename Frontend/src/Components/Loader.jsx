import React from "react";
import { MdFrontLoader } from "react-icons/md";

const Loader = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-white">
      <div className="content">
        <div className="pill">
          <div className="medicine">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="side"></div>
          <div className="side"></div>
        </div>
      </div>

      <h1 className="text-7xl font-bold text-green-700">Medico</h1>
    </div>
  );
};

export default Loader;

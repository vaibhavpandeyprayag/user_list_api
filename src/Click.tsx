import React from "react";
import { useState } from "react";
import { convertToObject } from "typescript";

interface Props {
}

const Click: React.FC<Props> = (props) => {
  let counter = 0;
  function myFunction() {
    console.log(counter);
  }
  return (
    <>
      <button className="transform ease-in-out duration-300 hover:bg-indigo-600 active:scale-75 hover:scale-90 m-8 px-4 py-2 bg-indigo-800 text-white rounded-xl shadow-2xl text-center font-bold"
        onClick={() => {
          counter += 1;
          myFunction();
        }}>
        Click Me
      </button>
    </>
  );
}

export default Click;
"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>
        Error 999: Glitch in the Matrix. Please take the red pill and try again,
        or take the blue pill to exit.
      </h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Red Pill
      </button>
    </div>
  );
};

export default Error;

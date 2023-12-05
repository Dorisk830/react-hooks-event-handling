import React from "react";

function Tickler() {
  const tickle = () => {
    console.log("Teehee!");
  };

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;

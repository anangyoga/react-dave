import React from "react";

function Content() {
  const handleRandomName = () => {
    const names = ["Timo", "Walter", "Agnes", "Sochi"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return <main>Hi {handleRandomName()}</main>;
}

export default Content;

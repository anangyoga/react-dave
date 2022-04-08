import React, { useState } from "react";

function Content() {
  const [name, setName] = useState("Dave");

  const handleRandomName = () => {
    const names = ["Timo", "Walter", "Agnes", "Sochi"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  return (
    <main>
      <p>Hi {name}! </p>
      <button onClick={handleRandomName}>Change Name</button>
    </main>
  );
}

export default Content;

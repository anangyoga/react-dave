import React from "react";

function Content() {
  const handleRandomName = () => {
    const names = ["Timo", "Walter", "Agnes", "Sochi"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  const handleClick = () => {
    console.log("clicked");
  };
  const handleClickName = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClickEvent = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hi {handleRandomName()} </p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClickName("Tim")}>Show Name</button>
      <button onClick={(e) => handleClickEvent(e)}>Event</button>
    </main>
  );
}

export default Content;

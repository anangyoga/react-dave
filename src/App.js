import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Pine Sugar with Jelly Drink",
    },
    {
      id: 3,
      checked: false,
      item: "Sugarless White Milk",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

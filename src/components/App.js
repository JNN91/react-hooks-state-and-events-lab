import React,{useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [currentColor, setColor] = useState();

	function changeCurrentColor() {
		setColor(!currentColor)
	}

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = currentColor ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button> onClick={changeCurrentColor} Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

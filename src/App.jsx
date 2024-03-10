import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Friends from "./Friends";
import Photos from "./Posts";
import Posts from "./Posts";

function App() {
  function handleClick() {alert("button click")}
const addToFive=(num)=>{
  alert(num+5)
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>React core concept 2</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{alert('button click')}}>Click 2</button>
      <button onClick={()=>addToFive(3)}>Click 3</button>
      <Counter></Counter>
      <Team></Team>
      <Friends></Friends>
      <Posts></Posts>
    </>
  );
}

export default App;

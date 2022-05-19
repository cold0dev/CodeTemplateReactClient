import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Add from "./components/Add";
import Find from "./components/Find";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Switch(props){
  let path = props.path;

  switch (path){
    case "/add":
      return (
        <div><Add></Add></div>
      )
    default:
      return (
        <div><Find></Find></div>
      )
  }
}

function App() {
  const [path,setPath] = useState("/");

  return (
    <div className="App">
        <div className="AppBody">
          <nav>
            <Button onClick={() => {setPath("/")}} className="sz">Find</Button>
            <Button onClick={() => {setPath("/add")}} className="sz">Add</Button>
          </nav>
            <Switch path={path}></Switch>
        </div>
    </div>
  );
}

export default App;

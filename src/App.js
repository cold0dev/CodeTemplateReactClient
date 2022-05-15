import { useState } from 'react';
import './App.css';

async function postData(url = '', data = {},isJSONResponse) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(isJSONResponse)return response.json(); // parses JSON response into native JavaScript objects
  return response.text();
}

async function addTemplate(name,code){
  if (name === "" || code === "")return;

  let res = await postData("http://localhost:9090/add",{name: name,code: code},false);
  console.log(res);
}

function App() {
  const [templateName,setTemplateName] = useState("");
  const [templateCode,setTemplateCode] = useState("");

  return (
    <div className="App">
      <h1>Code Template</h1>
      <h3>Name:</h3>
      <input onChange={() => {setTemplateName(document.getElementById("tName").value)}} type="text" id="tName"></input>
      <br></br>
      <h3>Code:</h3>
      <textarea onChange={() => {setTemplateCode(document.getElementById("tCode").value)}} id="tCode"></textarea>
      <br></br>
      <button onClick={() => {addTemplate(templateName,templateCode)}}>Send</button>
    </div>
  );
}

export default App;

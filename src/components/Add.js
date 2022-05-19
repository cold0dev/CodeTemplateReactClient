import { useState } from "react";
import postData from "../PostData";
import Button from "react-bootstrap/Button";

async function addTemplate(name,code){
    if (name === "" || code === "")return;
  
    let res = await postData("http://localhost:9090/add",{name: name,code: code},false);
    console.log(res);
}

function Add(){
    const [templateName,setTemplateName] = useState("");
    const [templateCode,setTemplateCode] = useState("");

    return (
        <div>
        <h3>Name:</h3>
        <input className="m-top NameBox" onChange={() => {setTemplateName(document.getElementById("tName").value)}} type="text" id="tName"></input>
        <br></br>
        <h3 className="m-top">Code:</h3>
        <textarea className="m-top NameBox" onChange={() => {setTemplateCode(document.getElementById("tCode").value)}} id="tCode"></textarea>
        <br></br>
        <Button className="sz max m-top" onClick={() => {addTemplate(templateName,templateCode)}}>Send</Button>
        </div>
    )
}

export default Add;
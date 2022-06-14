import {useState} from "react"
import getData from "../GetData"
import deleteData from "../DeleteData"
import Accordion from "react-bootstrap/Accordion"
import Trash from "./trash.svg"

async function removeTemplate(setTemplates,name){
    let res = await deleteData("http://localhost:9090/remove",{name:name},false);
    setTemplates({loaded: false,data: []});
}

async function getTemplates(setTemplates){
    let data = await getData("http://localhost:9090/all",true);
    setTemplates({loaded: true,data: data});
}

function Find(){
    const [templateName,setTemplateName] = useState("");
    const [templates,setTemplates] = useState({loaded: false, data: []});

    let eventKey = -1;

    if (!templates.loaded){
        getTemplates(setTemplates);
    }

    return(
        <div className="Find">
            <h3>Name:</h3>
            <input className="m-top NameBox" onChange={() => {setTemplateName(document.getElementById("tName").value)}} type="text" id="tName"></input>
            <Accordion className="m-top">
            {
                    templates.data.map((element) => {
                        if (templateName.includes(":")){
                            let lang = templateName.split(":")[1];
                            if (!element.language.includes(lang))return;
                            if (!element.name.includes(templateName.split(":")[0]))return;
                        }
                        else if (!element.name.includes(templateName))return;
                        eventKey++;
                        return (
                            <Accordion.Item eventKey={eventKey}>
                                <Accordion.Header>
                                    {element.name}
                                    <img onClick={() => {removeTemplate(setTemplates,element.name)}} className="Trash" src={Trash}></img>
                                </Accordion.Header>
                                <Accordion.Body>
                                {element.code}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default Find;
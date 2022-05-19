import {useState} from "react"
import getData from "../GetData"
import Accordion from "react-bootstrap/Accordion"

async function getTemplates(setTemplates){
    let data = await getData("http://localhost:9090/all",true);
    console.log(data);
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
                        if (!element.name.includes(templateName))return;
                        eventKey++;
                        console.log(element)
                        return (
                            <Accordion.Item eventKey={eventKey}>
                                <Accordion.Header>{element.name}</Accordion.Header>
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
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Title({content, sendDataToParent}) {
    let iconList = ["☺", "❤", "✓", "✉", "©", "★"];
    const [title, setTitle] = useState("");
    const [titleColor, setTitleColor] = useState("");
    let data = {...content};
    const handleSaveComponentEvent = () => {
        data["text"] = title
        data["color"] = titleColor;
        sendDataToParent(data);
    }


    return (
    <div className="d-flex flex-column text-center px-3 py-3">
        <h4 className="fw-bold">Edit</h4>
        <div className="d-flex flex-column border rounded-1 px-3 py-3">
            <p className="text-start mb-0">Suggested icons: </p>
            <div className="d-flex flex-row flex-wrap">
                {
                    iconList.map((icon, index) => {
                        return <span key={index} className="mx-1">{icon}</span>
                    })
                }
            </div>
            <input className="form-control mt-3" name="" id="" placeholder="Enter the title here" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            <div className="d-flex flex-row my-3">
                <button className="btn btn-primary ms-auto me-2" onClick={handleSaveComponentEvent}>Save</button>
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default Title;

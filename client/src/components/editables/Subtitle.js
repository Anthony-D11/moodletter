import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Subtitle({content, sendDataToParent}) {
    let iconList = ["☺", "❤", "✓", "✉", "©", "★"];
    const [subtitle1, setSubtitle1] = useState("");
    const [subtitleColor1, setSubtitleColor1] = useState("")
    const [subtitle2, setSubtitle2] = useState("");
    const [subtitleColor2, setSubtitleColor2] = useState("")
    let data = {...content};
    const handleSaveComponentEvent = () => {
        data["text_1"] = subtitle1;
        data["text_2"] = subtitle2;
        data["color_1"] = subtitleColor1;
        data["color_2"] = subtitleColor2;
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
            <input className="form-control mt-3" name="" id="" placeholder="Enter the subtitle 1 here" value={subtitle1} onChange={(event) => setSubtitle1(event.target.value)}></input>
            <input className="form-control mt-3" name="" id="" placeholder="Enter the subtitle 2 here" value={subtitle2} onChange={(event) => setSubtitle2(event.target.value)}></input>
            
            <div className="d-flex flex-row my-3">
                <button className="btn btn-primary ms-auto me-2" onClick={handleSaveComponentEvent}>Save</button>
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default Subtitle;

import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function ImageText({content, sendDataToParent}) {
    let iconList = ["☺", "❤", "✓", "✉", "©", "★"];
    let data = {...content};
    const [imageUrl, setImageUrl] = useState(data["image"]);
    const [text, setText] = useState(data["text"]);
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("");
    
    const handleSaveComponentEvent = () => {
        data["image"] = imageUrl;
        data["text"] = text;
        data["background_color"] = backgroundColor;
        data["text_color"] = textColor;
        sendDataToParent(data);
    }
    return (
    <div className="d-flex flex-column text-center px-3 py-3">
        <h4 className="fw-bold">Edit</h4>
        <input className="form-control mb-3" type="text" placeholder="Enter url of the image here" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
        <div className="d-flex flex-column border rounded-1 px-3 py-3">
            <p className="text-start mb-0">Suggested icons: </p>
            <div className="d-flex flex-row flex-wrap">
                {
                    iconList.map((icon, index) => {
                        return <span key={index} className="mx-1">{icon}</span>
                    })
                }
            </div>
            <textarea className="form-control mt-3" name="" id="" placeholder="Enter text here"  value={text} onChange={(event) => setText(event.target.value)}></textarea>
            
            <div className="d-flex flex-row my-3">
                <button className="btn btn-primary ms-auto me-2" onClick={handleSaveComponentEvent}>Save</button>
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default ImageText;

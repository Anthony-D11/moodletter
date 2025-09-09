import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Image({content, sendDataToParent}) {
    let iconList = ["☺", "❤", "✓", "✉", "©", "★"];
    let data = {...content};
    const [imageUrl, setImageUrl] = useState(data["image"]);
    
    const handleSaveComponentEvent = () => {
        data["image"] = imageUrl;
        sendDataToParent(data);
    }
    return (
    <div className="d-flex flex-column text-center px-3 py-3">
        <h4 className="fw-bold">Edit</h4>
        <input className="form-control mb-3" type="text" placeholder="Enter url of the image here" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/>
        <div className="d-flex flex-row my-3">
            <button className="btn btn-primary ms-auto me-2" onClick={handleSaveComponentEvent}>Save</button>
            <button className="btn btn-secondary">Cancel</button>
        </div>
    </div>
    );
}

export default Image;

import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function ImageText({campaignName, campaignImage, sent}) {
    let iconList = ["☺", "❤", "✓", "✉", "©", "★"];
    return (
    <div className="d-flex flex-column text-center px-3 py-3">
        <h4 className="fw-bold">Edit</h4>
        <input className="form-control mb-3" type="text" placeholder="Enter url of the image here"/>
        <div className="d-flex flex-column border rounded-1 px-3 py-3">
            <p className="text-start mb-0">Suggested icons: </p>
            <div className="d-flex flex-row flex-wrap">
                {
                    iconList.map((icon, index) => {
                        return <span key={index} className="mx-1">{icon}</span>
                    })
                }
            </div>
            <textarea className="form-control mt-3" name="" id="" placeholder="Enter text here"></textarea>
            
            <div className="d-flex flex-row my-3">
                <button className="btn btn-primary ms-auto me-2">Save</button>
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default ImageText;

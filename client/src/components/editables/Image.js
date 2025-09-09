import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function Image({campaignName, campaignImage, sent}) {
    let iconList = ["☺", "❤", "✓", "✉", "©", "★"];
    return (
    <div className="d-flex flex-column text-center px-3 py-3">
        <h4 className="fw-bold">Edit</h4>
        <input className="form-control mb-3" type="text" placeholder="Enter url of the image here"/>
    </div>
    );
}

export default Image;

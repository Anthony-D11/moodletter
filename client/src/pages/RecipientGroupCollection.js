import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import RecipientGroupCard from "../components/RecipientGroupCard";

function RecipientGroupCollection() {
    let apple = require("../assets/apple.jpg");
    const [showNewRecipientModalGroupModal, setShowNewRecipientModalGroupModal] = useState(false);
    
    const handleNewRecipientGroupEvent = () => {
        setShowNewRecipientModalGroupModal(true);
    }
    const handleCloseNewRecipientGroupModal = () => {
        setShowNewRecipientModalGroupModal(false);
    }
    let campaignList = ["abc@gmail.com", "abc12345@gmail.com", "anthony@gmail.com"]
    let emailList = ["abc@gmail.com", "abc12345@gmail.com", "anthony@gmail.com"]

    return (
        <div className="recipient-group-collection-page d-flex flex-column mx-5 my-5">
            <div className="d-flex flex-row">
                <h2 >Recipient groups</h2>
                <button className="btn btn-primary ms-auto mx-2" onClick={handleNewRecipientGroupEvent}>Create</button>
                <select className="form-select-sm mx-2" name="" id="" >
                    <option value="1">Donors</option>
                    <option value="1">Children</option>
                    <option value="1">Business men</option>
                </select>
            </div>
            <div className="d-flex flex-row flex-wrap">
                <RecipientGroupCard groupName="Group Name" numMembers={20}/>
                <RecipientGroupCard groupName="Group Name" numMembers={35}/>
            </div>
            <Modal show={showNewRecipientModalGroupModal} onHide={handleCloseNewRecipientGroupModal}>
                <Modal.Header closeButton>
                <Modal.Title>Recipient Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="d-flex flex-column">
                    <input className="my-2" type="text" placeholder="Group name" />
                    <div className="d-flex flex-row my-2">
                        <input className="me-4" type="text" placeholder="Recipient email"/>
                        <button className="btn btn-primary">Add</button>
                    </div>
                    <div className="d-flex flex-column">
                        {
                            emailList.map((email) => {
                                return <div key={email} className="d-flex flex-row my-1">
                                <span>{email}</span>
                                <button className="ms-auto">Remove</button>
                                </div>
                            })
                        }
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-secondary" onClick={handleCloseNewRecipientGroupModal}> Cancel</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RecipientGroupCollection;

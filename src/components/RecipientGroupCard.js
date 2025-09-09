import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function RecipientGroupCard({groupName, numMembers}) {
  const [showNewRecipientModalGroupModal, setShowNewRecipientModalGroupModal] = useState(false);
  
  const handleNewRecipientGroupEvent = () => {
    setShowNewRecipientModalGroupModal(true);
  }
  const handleCloseNewRecipientGroupModal = () => {
    setShowNewRecipientModalGroupModal(false);
  }
  let emailList = ["abc@gmail.com", "abc12345@gmail.com", "anthony@gmail.com"]

  return (
    <div className="d-flex flex-row mx-2 my-2 px-2 py-2 border border-1 rounded">
        <div className="d-flex flex-column">
            <h4 className="fw-bold">{groupName}</h4>
            <span>{numMembers} members</span>
        </div>
        <div className="ms-auto">
            <button className="btn btn-secondary mx-2" onClick={handleNewRecipientGroupEvent}>Edit</button>
            <button className="btn btn-danger mx-2">Delete</button>
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

export default RecipientGroupCard;

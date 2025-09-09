import { useState } from "react";
import NewsletterTemplate from "../components/NewsletterTemplate";
import RecipientGroupModal from "../components/RecipientGroupModal";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Title from "../components/editables/Title";
import Subtitle from "../components/editables/Subtitle";
import ImageText from "../components/editables/ImageText";
import Text from "../components/editables/Text";
import Image from "../components/editables/Image";
import CallToAction from "../components/editables/CallToActionButton";

function Campaign() {
  const [showNewRecipientModalGroupModal, setShowNewRecipientModalGroupModal] = useState(false);
  const [editingComponent, setEditingComponent] = useState(null);

  const handleNewRecipientGroupEvent = () => {
    setShowNewRecipientModalGroupModal(true);
  }
  const handleCloseNewRecipientGroupModal = () => {
    setShowNewRecipientModalGroupModal(false);
  }
  const handleClickComponentEvent = (key) => {
    switch (key) {
      case "1":
        setEditingComponent(<Title/>);
        break;
      case "2":
        setEditingComponent(<Subtitle/>);
        break;
      case "3":
        setEditingComponent(<ImageText/>);
        break;
      case "4":
        setEditingComponent(<ImageText/>);
        break;
      case "5":
        setEditingComponent(<Text/>);
        break;
      case "6":
        setEditingComponent(<Image/>);
        break;
      case "7":
        setEditingComponent(<CallToAction/>);
        break;
      default:
        setEditingComponent(null);
    }
  }

  let emailList = ["abc@gmail.com", "abc12345@gmail.com", "anthony@gmail.com"]

  return (
    <div className="campaign-page text-center d-flex flex-column mx-5 my-5">
        <div className="d-flex flex-row">
          <input type="text" placeholder="Campaign name" />
          <div className="dropdown ms-auto">
            <select name="" id="" className="form-select">
              <option value="celebration">Celebration</option>
              <option value="urgent">Urgent</option>
              <option value="thankyou">Thank You</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row my-4">
          <div className="border rounded-1 me-4" style={{width: "65%"}}>
            <NewsletterTemplate sendClickComponentEventToParent={handleClickComponentEvent}/>
          </div>
          <div className="border rounded-1 flex-grow-1">
            {editingComponent}
          </div>
        </div>
        <div>
          <div>Recipients</div>
          <button type="button" className="btn btn-primary mx-2 my-2" data-bs-toggle="modal" data-bs-target="#RecipientGroupsModal">
            Select recipient group
          </button>
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleNewRecipientGroupEvent}>
            Add new recipient group
          </button>
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
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-secondary mx-2"> Exit & Save</button>
          <button className="btn btn-primary mx-2">Send & Save</button>
        </div>
    </div>
  );
}

export default Campaign;

import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function RecipientGroupCard({groupId, groupName, numMembers, callback}) {
  const base_url = process.env["REACT_APP_BACKEND_URL"];
  const recipient_groups_url = base_url + "/recipient_groups";

  const [showExistingRecipientGroupModal, setShowExistingRecipientGroupModal] = useState(false);
  const [RecipientGroup, setRecipientGroup] = useState(null);
  const [existingRecipientGroupName, setExistingRecipientGroupName] = useState("");
  const [existingRecipientGroupEmailList, setExistingRecipientGroupEmailList] = useState([]);
  const [newRecipientEmail, setNewRecipientEmail] = useState("");


  const handleExistingRecipientGroupClickEvent = () => {
      setShowExistingRecipientGroupModal(true);
      fetchRecipientGroupById();
  }
  const handleCloseExistingRecipientGroupModal = () => {
      setShowExistingRecipientGroupModal(false);
  }
  const handleExistingRecipientGroupNameChangeEvent = (event) => {
      setExistingRecipientGroupName(event.target.value);
  }
  const handleNewRecipientEmailChangeEvent = (event) => {
      setNewRecipientEmail(event.target.value);
  }
  const handleNewRecipientEmailAddEvent = (event) => {
      if (!existingRecipientGroupEmailList.includes(newRecipientEmail)) {
            setExistingRecipientGroupEmailList([...existingRecipientGroupEmailList, newRecipientEmail])
        }
  }
  const handleRecipientEmailRemoveEvent = (event) => {
      let selectedEmail = event.target.dataset.value;
      setExistingRecipientGroupEmailList(existingRecipientGroupEmailList.filter(email => email !== selectedEmail));

  }
  const handleExistingRecipientGroupSaveEvent = () => {
      let payload = {
          "name": existingRecipientGroupName,
          "email_list": existingRecipientGroupEmailList
      }
      axios.put(recipient_groups_url + `/update/${groupId}`, payload).then((res) => {
          handleCloseExistingRecipientGroupModal();
          callback();
      });
  }
  const handleExistingRecipientGroupDeleteEvent = () => {
      axios.delete(recipient_groups_url + `/delete/${groupId}`).then((res) => {
          handleCloseExistingRecipientGroupModal();
          callback();
      });
  }


  const fetchRecipientGroupById = async() => {
      axios.get(recipient_groups_url + `/get/${groupId}`).then((res) => {
          setRecipientGroup(res.data.recipient_group);
      }).catch((e) => {
          console.log(e);
      })
  }
  useEffect(() => {
    if (RecipientGroup !== null) {
      setExistingRecipientGroupName(RecipientGroup["name"]);
      setExistingRecipientGroupEmailList(RecipientGroup["email_list"]);
    }
  }, [RecipientGroup])
  return (
    <div className="d-flex flex-row mx-2 my-2 px-2 py-2 border border-1 rounded">
        <div className="d-flex flex-column">
            <h4 className="fw-bold">{groupName}</h4>
            <span>{numMembers} members</span>
        </div>
        <div className="ms-auto">
            <button className="btn btn-secondary mx-2" onClick={handleExistingRecipientGroupClickEvent}>Edit</button>
            <button className="btn btn-danger mx-2" onClick={handleExistingRecipientGroupDeleteEvent}>Delete</button>
        </div>
        <Modal show={showExistingRecipientGroupModal} onHide={handleCloseExistingRecipientGroupModal}>
            <Modal.Header closeButton>
            <Modal.Title>Recipient Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex flex-column">
                  <input className="my-2" type="text" placeholder="Group name" value={existingRecipientGroupName} onChange={handleExistingRecipientGroupNameChangeEvent}/>
                  <div className="d-flex flex-row my-2">
                      <input className="me-4" type="text" placeholder="Recipient email" value={newRecipientEmail} onChange={handleNewRecipientEmailChangeEvent}/>
                      <button className="btn btn-primary" onClick={handleNewRecipientEmailAddEvent}>Add</button>
                  </div>
                  <div className="d-flex flex-column">
                      {
                        existingRecipientGroupEmailList.map((email, index) => {
                            return <div key={index} className="d-flex flex-row my-1">
                              <span>{email}</span>
                              <button data-value={email} className="ms-auto" onClick={handleRecipientEmailRemoveEvent}>Remove</button>
                            </div>
                        })
                      }
                  </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-primary" onClick={handleExistingRecipientGroupSaveEvent}>Save</button>
              <button className="btn btn-secondary" onClick={handleCloseExistingRecipientGroupModal}> Cancel</button>
            </Modal.Footer>
          </Modal>
    </div>
  );
}

export default RecipientGroupCard;

import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import RecipientGroupCard from "../components/RecipientGroupCard";
import axios from 'axios';

function RecipientGroupCollection() {
    const base_url = process.env["REACT_APP_BACKEND_URL"];
    const recipient_groups_url = base_url + "/recipient_groups";

    const [showNewRecipientGroupModal, setShowNewRecipientGroupModal] = useState(false);
    const [RecipientGroups, setRecipientGroups] = useState([]);
    const [newRecipientGroupName, setNewRecipientGroupName] = useState("");
    const [newRecipientGroupEmailList, setNewRecipientGroupEmailList] = useState([]);
    const [newRecipientEmail, setNewRecipientEmail] = useState("");


    const handleNewRecipientGroupEvent = () => {
        setShowNewRecipientGroupModal(true);
    }
    const handleCloseNewRecipientGroupModal = () => {
        setShowNewRecipientGroupModal(false);
    }
    const handleNewRecipientGroupNameChangeEvent = (event) => {
        setNewRecipientGroupName(event.target.value);
    }
    const handleNewRecipientEmailChangeEvent = (event) => {
        setNewRecipientEmail(event.target.value);
    }
    const handleNewRecipientEmailAddEvent = () => {
        if (!newRecipientGroupEmailList.includes(newRecipientEmail)) {
            setNewRecipientGroupEmailList([...newRecipientGroupEmailList, newRecipientEmail])
        }
    }
    const handleRecipientEmailRemoveEvent = (event) => {
        let selectedEmail = event.target.dataset.value;
        setNewRecipientGroupEmailList(newRecipientGroupEmailList.filter(email => email !== selectedEmail));
    }
    const handleNewRecipientGroupAddEvent = () => {
        let payload = {
            "name": newRecipientGroupName,
            "email_list": newRecipientGroupEmailList
        }
        axios.post(recipient_groups_url + "/add", payload).then((res) => {
            handleCloseNewRecipientGroupModal();
            refreshRecipientGroups();
        })
    }


    const refreshRecipientGroups = async() => {
        axios.get(recipient_groups_url + "/get").then((res) => {
            setRecipientGroups(res.data.recipient_groups);
        }).catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        refreshRecipientGroups();
    }, []);

    return (
        <div className="recipient-group-collection-page d-flex flex-column mx-5 my-5">
            <div className="d-flex flex-row">
                <h2 >Recipient groups</h2>
                <button className="btn btn-primary ms-auto mx-2" onClick={handleNewRecipientGroupEvent}>Create</button>
            </div>
            <div className="d-flex flex-row flex-wrap">
                {
                    RecipientGroups.map((recipient_group, index) => {
                        return <RecipientGroupCard groupId={recipient_group._id} groupName={recipient_group.name} numMembers={recipient_group.email_list.length} callback={refreshRecipientGroups}/>
                    })
                }
            </div>
            <Modal show={showNewRecipientGroupModal} onHide={handleCloseNewRecipientGroupModal}>
                <Modal.Header closeButton>
                <Modal.Title>Recipient Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="d-flex flex-column">
                    <input className="my-2" type="text" placeholder="Group name" value={newRecipientGroupName} onChange={handleNewRecipientGroupNameChangeEvent}/>
                    <div className="d-flex flex-row my-2">
                        <input className="me-4" type="text" placeholder="Recipient email" value={newRecipientEmail} onChange={handleNewRecipientEmailChangeEvent}/>
                        <button className="btn btn-primary" onClick={handleNewRecipientEmailAddEvent}>Add</button>
                    </div>
                    <div className="d-flex flex-column">
                        {
                            newRecipientGroupEmailList.map((email, index) => {
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
                <button className="btn btn-primary" onClick={handleNewRecipientGroupAddEvent}>Save</button>
                <button className="btn btn-secondary" onClick={handleCloseNewRecipientGroupModal}> Cancel</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RecipientGroupCollection;

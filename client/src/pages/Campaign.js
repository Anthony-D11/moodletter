import { useState, useEffect } from "react";
import axios from 'axios';
import NewsletterTemplate from "../components/NewsletterTemplate";
import Modal from 'react-bootstrap/Modal';
import Title from "../components/editables/Title";
import Subtitle from "../components/editables/Subtitle";
import ImageText from "../components/editables/ImageText";
import Text from "../components/editables/Text";
import Image from "../components/editables/Image";
import CallToAction from "../components/editables/CallToActionButton";

function Campaign() {
  const base_url = process.env["REACT_APP_BACKEND_URL"];
  const recipient_groups_url = base_url + "/recipient_groups";
  const campaigns_url = base_url + "/campaigns";
  const newsletters_url = base_url + "/newsletters";

  const [editingComponent, setEditingComponent] = useState(null);
  const [showNewRecipientGroupModal, setShowNewRecipientGroupModal] = useState(false);
  const [showExistingRecipientGroupModal, setShowExistingRecipientGroupModal] = useState(false);
  const [newRecipientGroupName, setNewRecipientGroupName] = useState("");
  const [newRecipientGroupEmailList, setNewRecipientGroupEmailList] = useState([]);
  const [newRecipientEmail, setNewRecipientEmail] = useState("");
  const [selectedRecipientGroup, setSelectedRecipientGroup] = useState(null);
  const [buttonLabel, setButtonLabel] = useState("");
  const [existingRecipientGroups, setExistingRecipientGroups] = useState([]);

  const [titleComponent, setTitleComponent] = useState({
    "text": "Title",
    "color": ""
  });
  const [subtitleComponent, setSubtitleComponent] = useState({
    "text_1": "Subtitle 1",
    "color_1": "",
    "text_2": "Subtitle 2",
    "color_2": ""
  });
  const [imageTextComponent, setImageTextComponent] = useState({
    "image": "https://github.com/Anthony-D11/OnlineStore/blob/master/client/src/assets/green_smoothie.jpg?raw=true",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "background_color": "",
    "text_color": ""
  });
  const [textImageComponent, setTextImageComponent] = useState({
    "image": "https://github.com/Anthony-D11/OnlineStore/blob/master/client/src/assets/green_smoothie.jpg?raw=true",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "background_color": "",
    "text_color": ""
  });
  const [textComponent, setTextComponent] = useState({
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "background_color": "",
    "text_color": ""
  });
  const [imageComponent, setImageComponent] = useState({
    "image": "https://github.com/Anthony-D11/OnlineStore/blob/master/client/src/assets/green_smoothie.jpg?raw=true",
  });


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
      })
  }

  const handleClickComponentEvent = (key) => {
    switch (key) {
      case "1":
        setEditingComponent(<Title content={titleComponent} sendDataToParent={(c) => setTitleComponent(c)}/>);
        break;
      case "2":
        setEditingComponent(<Subtitle content={subtitleComponent} sendDataToParent={(c) => setSubtitleComponent(c)}/>);
        break;
      case "3":
        setEditingComponent(<ImageText content={imageTextComponent} sendDataToParent={(c) => setImageTextComponent(c)}/>);
        break;
      case "4":
        setEditingComponent(<ImageText content={textImageComponent} sendDataToParent={(c) => setTextImageComponent(c)}/>);
        break;
      case "5":
        setEditingComponent(<Text content={textComponent} sendDataToParent={(c) => setTextComponent(c)}/>);
        break;
      case "6":
        setEditingComponent(<Image content={imageComponent} sendDataToParent={(c) => setImageComponent(c)}/>);
        break;
      case "7":
        setEditingComponent(<CallToAction/>);
        break;
      default:
        setEditingComponent(null);
    }
  }
  const refreshRecipientGroups = async() => {
      axios.get(recipient_groups_url + "/get").then((res) => {
          setExistingRecipientGroups(res.data.recipient_groups);
          console.log(res.data.recipient_groups)
      }).catch((e) => {
          console.log(e);
      })
  }

  const saveCampaign = async() => {
    let payload = {
      "title": titleComponent,
      "subtitle": subtitleComponent,
      "image_text": imageTextComponent,
      "text_image": textImageComponent,
      "text": textComponent,
      "image": imageComponent
    }
    console.log(payload);
    axios.post(newsletters_url + "/add", payload).then((res) => {

        console.log(res.data)
    }).catch((e) => {
        console.log(e);
    })
  }

  useEffect(() => {
    refreshRecipientGroups();
  }, []);
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
            <NewsletterTemplate title={titleComponent} subtitle={subtitleComponent} imageText={imageTextComponent} textImage={textImageComponent} text={textComponent} image={imageComponent} sendClickComponentEventToParent={handleClickComponentEvent}/>
          </div>
          <div className="border rounded-1 flex-grow-1">
            {editingComponent}
          </div>
        </div>
        <div>
          <div>Recipients</div>
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={() => setShowExistingRecipientGroupModal(true)}>
            {buttonLabel === "" ? "Select recipient group": buttonLabel}
          </button>
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleNewRecipientGroupEvent}>
            Add new recipient group
          </button>
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
          <Modal show={showExistingRecipientGroupModal} onHide={() => setShowExistingRecipientGroupModal(false)}>
              <Modal.Header closeButton>
              <Modal.Title>Recipient Groups</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div className="d-flex flex-column">
                {
                      existingRecipientGroups.map((group, index) => {
                        return <li data-value={index}>{group.name + " (" + group.email_list.length + " members)"}</li>
                      })
            
                }
              </div>
              </Modal.Body>
              <Modal.Footer>
              <button className="btn btn-primary" onClick={() => {setShowExistingRecipientGroupModal(false); setButtonLabel(existingRecipientGroups[selectedRecipientGroup]); console.log(selectedRecipientGroup)}}>Save</button>
              <button className="btn btn-secondary" onClick={() => {setShowExistingRecipientGroupModal(false); setSelectedRecipientGroup(null);}}> Cancel</button>
              </Modal.Footer>
          </Modal>
        </div>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-secondary mx-2" onClick={saveCampaign}> Exit & Save</button>
          <button className="btn btn-primary mx-2">Send & Save</button>
        </div>
    </div>
  );
}

export default Campaign;

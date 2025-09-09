import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function CampaignCard({campaignName, campaignImage, sent}) {
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  
  const handleViewAnalyticsEvent = () => {
    setShowAnalyticsModal(true);
  }
  const handleCloseViewAnalyticsModalEvent = () => {
    setShowAnalyticsModal(false);
  }
  let emailList = ["abc@gmail.com", "abc12345@gmail.com", "anthony@gmail.com"]

  return (
    <div className="d-flex flex-column mx-2 my-2 align-items-center">
        <img src={campaignImage} alt="" className="rounded" style={{width: "200px"}} />
        <h3>{campaignName}</h3>
        {
            sent ?
            <button className="btn btn-info" onClick={handleViewAnalyticsEvent}>View analytics</button>
            :
            <button className="btn btn-secondary">Edit</button>
        }
        <Modal show={showAnalyticsModal} onHide={handleCloseViewAnalyticsModalEvent}>
            <Modal.Header closeButton>
            <Modal.Title>Analytics View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column">
                    <p>Number of recipients clicked on link: </p>
                    <p>Number of recipients clicked on Call-to-Action button: </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleCloseViewAnalyticsModalEvent}> Cancel</button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}

export default CampaignCard;

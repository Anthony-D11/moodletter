import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import CampaignCard from "../components/CampaignCard";

function CampaignCollection() {
    let apple = require("../assets/apple.jpg");
    const [showNewRecipientModalGroupModal, setShowNewRecipientModalGroupModal] = useState(false);
    
    const handleNewRecipientGroupEvent = () => {
        setShowNewRecipientModalGroupModal(true);
    }
    const handleCloseNewRecipientGroupModal = () => {
        setShowNewRecipientModalGroupModal(false);
    }
    let campaignList = ["abc@gmail.com", "abc12345@gmail.com", "anthony@gmail.com"]

    return (
        <div className="campaign-collection-page d-flex flex-column mx-5 my-5">
            <div className="d-flex flex-row flex-wrap">
                <CampaignCard campaignImage={apple} campaignName="Campaign Name" sent={true}/>
                <CampaignCard campaignImage={apple} campaignName="Campaign Name" sent={false}/>

            </div>
        </div>
    );
}

export default CampaignCollection;

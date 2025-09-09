import {ObjectId} from "mongodb"

let campaigns;

export default class CampaignsDAO {
    static async injectDB(conn) {
        if(campaigns) {
            return
        }
        try {
            campaigns = await conn.db("moodletter").collection("campaigns");
        } catch(err) {
            console.error(`Unable to establish collection handles in CampaignsDAO: ${err}`);
        }
    }
    static getCampaigns() {
        try{
            return campaigns.find({});
        } catch(err) {
            console.error(`Unable to list campaigns: ${err}`);
            return {"error": e};
        }
    }
    static getCampaignById(id) {
        try{
            return campaigns.findOne({_id: ObjectId.createFromHexString(id)});
        } catch(err) {
            console.error(`Unable to get the information of campaign ${id}: ${err}`);
            return {"error": e};
        }
    }
    static addCampaign(name, newsletter_id, recipient_group_id, sent_date, number_opens, number_call_to_actions) {
        try{
            const CampaignDoc = {
                name: name,
                newsletter_id: newsletter_id,
                recipient_group_id: recipient_group_id,
                sent_date: sent_date,
                number_opens: number_opens,
                number_call_to_actions: number_call_to_actions
            }
            return campaigns.insertOne(CampaignDoc);
        } catch(err) {
            console.error(`Unable to add campaign: ${err}`);
            return {"error": e};
        }
    }
    static updateCampaign(id, name, newsletter_id, recipient_group_id, sent_date, number_opens, number_call_to_actions) {
        try{
            const CampaignDoc = {
                name: name,
                newsletter_id: newsletter_id,
                recipient_group_id: recipient_group_id,
                sent_date: sent_date,
                number_opens: number_opens,
                number_call_to_actions: number_call_to_actions
            }
            return campaigns.updateOne(
                {_id: ObjectId.createFromHexString(id)},
                {$set: CampaignDoc}
            );
        } catch(err) {
            console.error(`Unable to update campaign: ${err}`)
            return {"error": e}
        }
    }
    static deleteCampaign(id) {
        try{
            return campaigns.deleteOne(
                {_id: ObjectId.createFromHexString(id)}
            );
        } catch(err) {
            console.error(`Unable to delete campaign: ${err}`)
            return {"error": e}
        }
    }
}
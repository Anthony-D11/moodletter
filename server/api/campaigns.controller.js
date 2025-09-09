import CampaignsDAO from "../dao/CampaignsDAO.js"

export default class CampaignsController {
    static async getCampaigns(req, res, next) {
        try {
            const response = await CampaignsDAO.getCampaigns().toArray();
            res.json({
                "status": "success",
                "campaigns": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async getCampaignById(req, res, next) {
        try {
            const id = req.params.campaign_id;
            const response = await CampaignsDAO.getCampaignById(id);
            res.json({
                "status": "success",
                "campaign": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async addCampaign(req, res, next) {
        try {
            const name = req.body.name;
            const newsletter_id = req.body.newsletter_id;
            const recipient_group_id = req.body.recipient_group_id;
            const sent_date = req.body.sent_date;
            const number_opens = req.body.number_opens;
            const number_call_to_actions = req.body.number_call_to_actions;
            const response = await CampaignsDAO.addCampaign(name, newsletter_id, recipient_group_id, sent_date, number_opens, number_call_to_actions);
            res.json({
                "status": "success",
                "campaign": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async updateCampaign(req, res, next) {
        try {
            const id = req.params.campaign_id;
            const name = req.body.name;
            const email_list = req.body.email_list;
            const response = await CampaignsDAO.updateCampaign(id, name, newsletter_id, recipient_group_id, sent_date, number_opens, number_call_to_actions);
            res.json({
                "status": "success",
                "campaign": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async deleteCampaign(req, res, next) {
        try {
            const id = req.params.campaign_id;
            const response = await CampaignsDAO.deleteCampaign(id);
            res.json({
                "status": "success",
                "campaign": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    
}
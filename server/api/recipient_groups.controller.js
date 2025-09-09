import RecipientGroupsDAO from "../dao/RecipientGroupsDAO.js"

export default class RecipientGroupsController {
    static async getRecipientGroups(req, res, next) {
        try {
            const response = await RecipientGroupsDAO.getRecipientGroups().toArray();
            res.json({
                "status": "success",
                "recipient_groups": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async getRecipientGroupById(req, res, next) {
        try {
            const id = req.params.recipient_group_id;
            const response = await RecipientGroupsDAO.getRecipientGroupById(id);
            res.json({
                "status": "success",
                "recipient_group": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async addRecipientGroup(req, res, next) {
        try {
            const name = req.body.name;
            const email_list = req.body.email_list;
            const response = await RecipientGroupsDAO.addRecipientGroup(name, email_list);
            res.json({
                "status": "success",
                "recipient_group": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async updateRecipientGroup(req, res, next) {
        try {
            const id = req.params.recipient_group_id;
            const name = req.body.name;
            const email_list = req.body.email_list;
            const response = await RecipientGroupsDAO.updateRecipientGroup(id, name, email_list);
            res.json({
                "status": "success",
                "recipient_group": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async deleteRecipientGroup(req, res, next) {
        try {
            const id = req.params.recipient_group_id;
            const response = await RecipientGroupsDAO.deleteRecipientGroup(id);
            res.json({
                "status": "success",
                "recipient_group": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    
}
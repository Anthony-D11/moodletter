import NewslettersDAO from "../dao/NewslettersDAO.js"

export default class NewslettersController {
    static async getNewsletters(req, res, next) {
        try {
            const response = await NewslettersDAO.getNewsletters().toArray();
            res.json({
                "status": "success",
                "newsletters": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async getNewsletterById(req, res, next) {
        try {
            const id = req.params.newsletter_id;
            const response = await NewslettersDAO.getNewsletterById(id);
            res.json({
                "status": "success",
                "newsletter": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async addNewsletter(req, res, next) {
        try {
            const title = req.body.title;
            const subtitle = req.body.subtitle;
            const image_text = req.body.image_text;
            const text_image = req.body.text_image;
            const text = req.body.text;
            const image = req.body.image;
            const response = await NewslettersDAO.addNewsletter(title, subtitle, image_text, text_image, text, image);
            res.json({
                "status": "success",
                "newsletter": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async updateNewsletter(req, res, next) {
        try {
            const id = req.params.newsletter_id;
            const title = req.body.title;
            const subtitle = req.body.subtitle;
            const image_text = req.body.image_text;
            const text_image = req.body.text_image;
            const text = req.body.text;
            const image = req.body.image;
            const response = await NewslettersDAO.updateNewsletter(id, title, subtitle, image_text, text_image, text, image);
            res.json({
                "status": "success",
                "newsletter": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    static async deleteNewsletter(req, res, next) {
        try {
            const id = req.params.newsletter_id;
            const response = await NewslettersDAO.deleteNewsletter(id);
            res.json({
                "status": "success",
                "newsletter": response
            });
        } catch(err) {
            res.status(500).json({"error": err});
        }
    }
    
}
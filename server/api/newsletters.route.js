import express from "express"
import NewslettersController from "./newsletters.controller.js"

const router = express.Router()

router.route("/get").get(NewslettersController.getNewsletters)
router.route("/get/:newsletter_id").get(NewslettersController.getNewsletterById)
router.route("/add").post(NewslettersController.addNewsletter)
router.route("/update/:newsletter_id").put(NewslettersController.updateNewsletter)
router.route("/delete/:newsletter_id").delete(NewslettersController.deleteNewsletter)

export default router
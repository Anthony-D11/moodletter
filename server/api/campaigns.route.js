import express from "express"
import CampaignController from "./campaigns.controller.js"

const router = express.Router()

router.route("/get").get(CampaignController.getCampaigns)
router.route("/get/:campaign_id").get(CampaignController.getCampaignById)
router.route("/add").post(CampaignController.addCampaign)
router.route("/update/:campaign_id").put(CampaignController.updateCampaign)
router.route("/delete/:campaign_id").delete(CampaignController.deleteCampaign)

export default router
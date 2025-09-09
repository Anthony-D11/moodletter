import express from "express"
import RecipientGroupsController from "./recipient_groups.controller.js"

const router = express.Router()

router.route("/get").get(RecipientGroupsController.getRecipientGroups)
router.route("/get/:recipient_group_id").get(RecipientGroupsController.getRecipientGroupById)
router.route("/add").post(RecipientGroupsController.addRecipientGroup)
router.route("/update/:recipient_group_id").put(RecipientGroupsController.updateRecipientGroup)
router.route("/delete/:recipient_group_id").delete(RecipientGroupsController.deleteRecipientGroup)

export default router
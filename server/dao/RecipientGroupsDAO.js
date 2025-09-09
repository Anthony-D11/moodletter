import {ObjectId} from "mongodb"

let recipientGroups;

export default class RecipientGroupsDAO {
    static async injectDB(conn) {
        if(recipientGroups) {
            return
        }
        try {
            recipientGroups = await conn.db("moodletter").collection("recipient_groups");
        } catch(err) {
            console.error(`Unable to establish collection handles in recipientGroupsDAO: ${err}`);
        }
    }
    static getRecipientGroups() {
        try{
            return recipientGroups.find({});
        } catch(err) {
            console.error(`Unable to list recipient groups: ${err}`);
            return {"error": e};
        }
    }
    static getRecipientGroupById(id) {
        try{
            return recipientGroups.findOne({_id: ObjectId.createFromHexString(id)});
        } catch(err) {
            console.error(`Unable to get the information of recipient group ${id}: ${err}`);
            return {"error": e};
        }
    }
    static addRecipientGroup(name, email_list) {
        try{
            const recipientGroupDoc = {
                name: name,
                email_list: email_list,
            }
            return recipientGroups.insertOne(recipientGroupDoc);
        } catch(err) {
            console.error(`Unable to add recipient group: ${err}`);
            return {"error": e};
        }
    }
    static updateRecipientGroup(id, name, email_list) {
        try{
            const recipientGroupDoc = {
                name: name,
                email_list: email_list,
            }
            return recipientGroups.updateOne(
                {_id: ObjectId.createFromHexString(id)},
                {$set: recipientGroupDoc}
            );
        } catch(err) {
            console.error(`Unable to update recipient group: ${err}`)
            return {"error": e}
        }
    }
    static deleteRecipientGroup(id) {
        try{
            return recipientGroups.deleteOne(
                {_id: ObjectId.createFromHexString(id)}
            );
        } catch(err) {
            console.error(`Unable to delete recipient group: ${err}`)
            return {"error": e}
        }
    }
}
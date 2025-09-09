import {ObjectId} from "mongodb"

let newsletters;

export default class NewslettersDAO {
    static async injectDB(conn) {
        if(newsletters) {
            return
        }
        try {
            newsletters = await conn.db("moodletter").collection("newsletters");
        } catch(err) {
            console.error(`Unable to establish collection handles in NewslettersDAO: ${err}`);
        }
    }
    static getNewsletters() {
        try{
            return newsletters.find({});
        } catch(err) {
            console.error(`Unable to list newsletters: ${err}`);
            return {"error": e};
        }
    }
    static getNewsletterById(id) {
        try{
            return newsletters.findOne({_id: ObjectId.createFromHexString(id)});
        } catch(err) {
            console.error(`Unable to get the information of Newsletter ${id}: ${err}`);
            return {"error": e};
        }
    }
    static addNewsletter(title, subtitle, image_text, text_image, text, image) {
        try{
            const NewsletterDoc = {
                title: title,
                subtitle: subtitle,
                image_text: image_text,
                text_image: text_image,
                text: text,
                image: image
            }
            return newsletters.insertOne(NewsletterDoc);
        } catch(err) {
            console.error(`Unable to add Newsletter: ${err}`);
            return {"error": e};
        }
    }
    static updateNewsletter(id, title, subtitle, image_text, text_image, text, image) {
        try{
            const NewsletterDoc = {
                title: title,
                subtitle: subtitle,
                image_text: image_text,
                text_image: text_image,
                text: text,
                image: image
            }
            return newsletters.updateOne(
                {_id: ObjectId.createFromHexString(id)},
                {$set: NewsletterDoc}
            );
        } catch(err) {
            console.error(`Unable to update Newsletter: ${err}`)
            return {"error": e}
        }
    }
    static deleteNewsletter(id) {
        try{
            return newsletters.deleteOne(
                {_id: ObjectId.createFromHexString(id)}
            );
        } catch(err) {
            console.error(`Unable to delete Newsletter: ${err}`)
            return {"error": e}
        }
    }
}
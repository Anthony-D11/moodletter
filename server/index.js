import server from "./server.js"
import { MongoClient, ServerApiVersion } from "mongodb"
import RecipientGroupsDAO from "./dao/RecipientGroupsDAO.js"
import CampaignsDAO from "./dao/CampaignsDAO.js"
import NewslettersDAO from "./dao/NewslettersDAO.js"

const mongo_username = process.env["MONGODB_USERNAME"]
const mongo_password = process.env["MONGODB_PASSWORD"]
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.vvdon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const port = 4000
const mongo_client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
  
mongo_client.connect().catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
  await RecipientGroupsDAO.injectDB(client)
  await CampaignsDAO.injectDB(client)
  await NewslettersDAO.injectDB(client)

  server.listen(port, () => {
      console.log(`Server listening on port ${port}`)
  })
})

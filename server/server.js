import express from "express"
import cors from "cors"
import helmet from "helmet"
import recipient_groups from "./api/recipient_groups.route.js"
import campaigns from "./api/campaigns.route.js"
import newsletters from "./api/newsletters.route.js"

const server = express()
const corsOptions = {
    origin: process.env["FRONTEND_URL"],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
const helmetOptions = {
    contentSecurityPolicy: {
        directives: {
        "script-src": ["'self'"],
        },
    },
}
server.use(cors(corsOptions))
server.use(helmet(helmetOptions));
server.use(express.json())

server.use("/api/v1/recipient_groups", recipient_groups)
server.use("/api/v1/campaigns", campaigns)
server.use("/api/v1/newsletters", newsletters)

server.use("/{*any}", (req, res) => {
    res.status(404).json({error: "not found"})
})

export default server
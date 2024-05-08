const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

require("./DB/Connect_mongo");

const jobsRouter = require("./Routes/jobsRoute.js");
const applicationRouter = require("./Routes/applicationRoute.js")

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());
app.use('/jobs',jobsRouter);
app.use('/applications',applicationRouter);

app.get('/',(req,res) => {
    res.json("Server is running");
})
app.listen(PORT, () => {
    console.log(`Lab server running on port ${PORT}`);
});

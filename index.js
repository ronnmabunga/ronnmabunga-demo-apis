const express = require("express");
const app = express();
const demoApi1 = require("./blogging-website-app-api-demo/index");
const demoApi2 = require("./expressjs-fs-monolithic-user-api-demo/index");
require("dotenv").config();

app.use("/demo-api-1", demoApi1);
app.use("/demo-api-2", demoApi2);

if (require.main === module) {
    app.listen(4000, () => {
        console.log(`API is now online on port 4000`);
    });
}
module.exports = app;

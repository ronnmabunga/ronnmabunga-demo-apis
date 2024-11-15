const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const demoApi1 = require("./expressjs-mongodb-mrc-blogging-api-demo/index");
const demoApi2 = require("./expressjs-fs-monolithic-user-api-demo/index");
const demoApi3 = require("./expressjs-mongodb-mrc-ecommerce-api-demo/index");
require("dotenv").config();

app.use("/demo-api-1", demoApi1);
app.use("/demo-api-2", demoApi2);
app.use("/demo-api-3", demoApi3);
app.use(
    "/demo-api-4",
    createProxyMiddleware({
        target: "http://django:8001",
        changeOrigin: true,
        pathRewrite: {
            "^/demo-api-4": "",
        },
    })
);

if (require.main === module) {
    app.listen(4000, () => {
        console.log(`API is now online on port 4000`);
    });
}
module.exports = app;

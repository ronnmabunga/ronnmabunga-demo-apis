const express = require("express");
const app = express();
require("dotenv").config();


if (require.main === module) {
    app.listen(4000, () => {
        console.log(`API is now online on port 4000`);
    });
}
module.exports = app;

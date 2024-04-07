const express = require("express");
const app = express();
const PORT = 5005;
const server = app.listen(PORT, () => {
  console.log("App is running on port 5005");
});

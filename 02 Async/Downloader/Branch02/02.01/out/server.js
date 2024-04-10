"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors"); // Make sure to npm install cors
const app = express();
// Use CORS to allow requests from your frontend domain
app.use(cors());
app.get("/image", (req, res) => {
    // Specify the path to your image
    const imagePath = path.join(__dirname, "images/rocky.png");
    // Set the Content-Type header based on the file type
    res.type("image/*");
    res.sendFile(imagePath);
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

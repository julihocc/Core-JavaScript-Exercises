const express = require("express");
const path = require("path");
const cors = require("cors"); // Make sure to npm install cors

const app = express();

// Use CORS to allow requests from your frontend domain
app.use(cors());

app.get("/image", (req, res) => {
  // Specify the path to your image
  res.sendFile(path.join(__dirname, "images/rocky.png"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

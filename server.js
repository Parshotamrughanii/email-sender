const express = require("express");
const cors = require("cors"); // Import the cors package
const appRoute = require("./routes/routes");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors()); // Add cors middleware to allow all origins (you can configure it as needed)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", appRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));


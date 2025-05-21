const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: "https://greenland-public-school.vercel.app/"
}));
app.use(bodyParser.json());

const emailRoutes = require("./Routes/emailRoutes.js");
app.use("/api", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

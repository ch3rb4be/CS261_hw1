const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (reg, res) => {
    res.sendFile(path.join(__dirname, "public", "html" , "login.html"));
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));

const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB

connectDB();

//Init Middleware
app.use(express.json({ extented: false }));

app.get("/", (req, res) => res.send("API running"));

//define routes

app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server have started on PORt: ${PORT}`);
});

const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;

const userRoutes = require("./routes/User");


app.use(express.json());
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cookieParser());
app.use(
	cors({
		origin:"https://random-gif-generator-f.netlify.app",
		credentials:true,
	})
)

app.use("/api/v1/auth", userRoutes);

const database = require("./config/database");
database.connect();


app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: 'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

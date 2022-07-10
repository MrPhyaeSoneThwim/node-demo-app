const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
	res.send({
		status: "success",
		message: "Welcome to NexStack",
	});
});

app.get("/hello", (req, res, next) => {
	res.send({
		status: "success",
		message: "Hello, Welcome to NexStack",
	});
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
	console.log("server is running");
});

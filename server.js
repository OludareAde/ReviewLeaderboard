const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mockdb = require("./db");

const app = express();
const port = 7100;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
	res.render("homepage/index");
});

app.get("/leaderboard", (req, res) => {
	const users = mockdb();
	res.render("Leaderboard/leaderboard", { users });
});
app.listen(port, () => console.log("server is listening on port", port));

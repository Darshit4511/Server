const expres = require("express");
const cors = require("cors");
const studentDB = require("./Database/criminalProfiling");

const app = expres();
const port = process.env.PORT || 5000;

app.use(expres.urlencoded({ extended: true }));
app.use(expres.json({ limit: "20mb", extended: true }));

app.use(cors());

// Student Routes
app.use("/MissingPerson", require("./routes/MissingPerson.Route"));

// MongoDb connection
criminalProfiling();

// listening the server
app.listen(port, () => console.log(`Server is running at ${port}`));

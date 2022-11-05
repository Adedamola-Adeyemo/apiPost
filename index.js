const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT;

const name = 'Adedamola Adeyemo';
const backend = true;
const age = 25;
const bio = 'Passionate about problem solving';


app.post("/", (req, res) => {
    const { operation, x, y } = req.body;

    res.send({ "slackUsername": name, "result": x+y, "operation_type": operation.value });
  }
);

app.listen(
    port,
    () => console.log(`Server running on ${port}`)
)




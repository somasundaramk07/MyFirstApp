const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // serve calculator.html

app.post("/calc", (req, res) => {
    const { n1, n2, op } = req.body;

    const a = parseFloat(n1);
    const b = parseFloat(n2);
    let result;

    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b != 0 ? a / b : "Error: Division by zero"; break;
        default: result = "Invalid operator";
    }

    res.json({ result });
});

app.listen(3000, () => {
    console.log("Calculator running at http://localhost:3000");
});

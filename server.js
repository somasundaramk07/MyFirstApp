const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/calc", (req, res) => {
    const { num1, num2, op } = req.body;

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result;

    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b !== 0 ? a / b : "Error: Division by zero";
            break;
        default:
            result = "Invalid operator";
    }

    res.json({ result });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

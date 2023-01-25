const express = require('express');
const cors = require('cors');
const app = express(); 
app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
    console.log(req.query);

    const ans = Math.pow(req.query.message1, req.query.message2)
    res.status(200).send({ ans }); console.log(ans);
});

app.post('/', (req, res) => { res.json("Hello from server!"); });
app.listen(6006, () => { console.log(`Server is running on port 6006.`); });
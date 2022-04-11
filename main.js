const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./routes/wallet');

app.get('/', (req, res)=>{
    res.send("Welcome to Wallet");
});


app.use(cors());
app.use(router);

// Preparing PORT
const PORT = 5000 || process.env;
app.listen(PORT, ()=>{
    console.log("listening on port " +PORT);
})
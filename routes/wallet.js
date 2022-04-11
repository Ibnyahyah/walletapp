const express = require("express");
const router = express.Router();

const ethers = require("ethers");
const crypto = require("crypto");

router.get("/api/v1/wallet", function (req, res) {
  try {
    //   Getting Round 32 characters
    var id = crypto.randomBytes(32).toString("hex");

    // adding the 32 characters to the "0x" which is unique for ethereum address
    var privateKey = "0x" + id;

    // Getting the wallet address for the private key
    var wallet = new ethers.Wallet(privateKey);

    // Structuring them as an object;
    const newWallet = [
      {
        privateKey: privateKey + ' "DONT SHARE THIS WITH ANY ONE"',
        wallet: wallet.address,
        wallet: wallet,
      },
    ];

    res.status(200).json(newWallet);
    console.log(newWallet);
  } catch (e) {
    console.log(e);
  }
});

// exporting the routers
module.exports = router;

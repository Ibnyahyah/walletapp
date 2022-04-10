const ethers = require('ethers');
const crypto = require('crypto');

var id = crypto.randomBytes(32).toString('hex');

var privateKey = "0x"+id;
console.log('DONT SHARE THIS WITH ANY ONE', privateKey);
console.log(privateKey);

var wallet = new ethers.Wallet(privateKey);
console.log('This Is Your Address', wallet.address);
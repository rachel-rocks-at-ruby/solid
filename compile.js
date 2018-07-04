// can't require Inbox.sol because it's not a JS file
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// can handle multiple contracts, but we only have 1
module.exports = solc.compile(source, 1).contracts[':Inbox'];
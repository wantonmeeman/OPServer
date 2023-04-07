var app = require('./src/app.js');

const PORT = 3000
const IPADDR = '192.168.1.235'

var server = app.listen(PORT, IPADDR, function () {
    console.log(`Web App Hosted at http://${IPADDR}:${PORT}`);
});
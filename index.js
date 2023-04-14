var app = require('./src/app.js');

const PORT = 3000
const IPADDR = '127.0.0.1'

app.listen(PORT, IPADDR, function () {
    console.log(`Web App Hosted at http://${IPADDR}:${PORT}`);
});
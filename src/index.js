const caniuse = require('caniuse-db/data').agents;

let list = {};

for (let browser in caniuse) {
    list[browser] = [];
    for (let version of caniuse[browser].versions) {
        if (!version) continue;
        if (typeof version === 'string') {
            version = version.split('-')[0];
        }
        list[browser].push(version);
    }
}

module.exports = list;

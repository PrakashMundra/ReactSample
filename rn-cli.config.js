const metro = require("metro");
const blacklist = require("metro-config/src/defaults/blacklist");
module.exports = {
    resolver: {
        blacklistRE: metro.createBlacklist([/android\/.*/, /ios\/.*/])
    }
};

const path = require("path");

module.exports = function override(config, env) {
    config.resolve = {
        alias: {
            //Common
            "@Common": path.resolve(__dirname, "src/common"),
            "@Api": path.resolve(__dirname, "src/common/api"),
            "@CommonComponent": path.resolve(__dirname, "src/common/components"),
            "@Data": path.resolve(__dirname, "src/common/data"),
            "@ConfigFile": path.resolve(__dirname, "src/common/config"),
            "@HistoryFile": path.resolve(__dirname, "src/common/history"),
            
            //Routes
            "@Route": path.resolve(__dirname, "src/routes"),
            

        },
    };
    return config;
};

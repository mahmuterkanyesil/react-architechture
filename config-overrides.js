const path = require("path");

module.exports = function override(config, env) {
	config.resolve = {
		alias: {
			// Common
			"@Common": path.resolve(__dirname, "src/common"),
			"@Api": path.resolve(__dirname, "src/common/api"),
			"@CommonComponent": path.resolve(
				__dirname,
				"src/common/components",
			),
			"@Data": path.resolve(__dirname, "src/common/data"),
			"@ConfigFile": path.resolve(__dirname, "src/common/config"),
			"@HistoryFile": path.resolve(__dirname, "src/common/history"),
			"@ConstantFile": path.resolve(__dirname, "src/common/constants"),
			"@EnumFile": path.resolve(__dirname, "src/common/enums"),
			"@MessageFile": path.resolve(__dirname, "src/common/messages"),

			// Component
			"@Component": path.resolve(__dirname, "src/components"),
			"@AppComponent": path.resolve(__dirname, "src/components/app"),
			"@LandingPageComponent": path.resolve(
				__dirname,
				"src/components/landingPage",
			),

			//Helper
			"@Helper": path.resolve(__dirname, "src/helpers"),
			"@Fetch": path.resolve(__dirname, "src/helpers/fetch"),
			"@PrivateFetch": path.resolve(
				__dirname,
				"src/helpers/privateFetch",
			),

			// Redux
			"@Redux": path.resolve(__dirname, "src/redux"),
			"@RootReducerFile": path.resolve(
				__dirname,
				"src/redux/rootReducer",
			),
			"@StoreFile": path.resolve(__dirname, "src/redux/store"),

			//Route
			"@Route": path.resolve(__dirname, "src/routes"),

			//View
			"@View": path.resolve(__dirname, "src/views"),
			"@AppView": path.resolve(__dirname, "src/views/app"),
			"@LandingPageView": path.resolve(
				__dirname,
				"src/views/landingPage",
			),
		},
	};
	return config;
};

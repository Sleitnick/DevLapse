/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = (env, argv) => {
	const isProd = (argv.mode === "production");
	const public = path.resolve(__dirname, "./build");
	const config = {
		target: "electron-main",
		externals: {
			"screenshot-desktop": "require(\"screenshot-desktop\")",
			"ffmpeg-binaries": "require(\"ffmpeg-binaries\")"
		},
		node: {
			__dirname: false
		},
		entry: {
			main: path.join(__dirname, "src", "main.ts")
		},
		output: {
			path: public,
			filename: "[name].js"
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"]
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					include: path.resolve(__dirname, "src"),
					use: "ts-loader"
				}
			]
		}
	};
	if (!isProd) {
		config.devtool = "inline-source-map";
	}
	return config;
};
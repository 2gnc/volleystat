const path = require( 'path' );

module.exports = {
	entry: path.join( __dirname, 'app', 'App.js' ),
	output: {
		path: path.join( __dirname, 'dist' ),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};
module.exports = {
	entry: './src/jsx-app-test',
	output: {
		path: 'dist',
		filename: 'jsx-app-test.js',
	},
	resolve: {
		extensions: ['', '.jsx', '.js']
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {presets: ['react', 'es2015']},
			},
		],
	},
};

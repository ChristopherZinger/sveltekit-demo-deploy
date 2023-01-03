module.exports = {
	apps: [{
		name: 'webapp',
		script: './app/build/index.js',
		env: {
			"ORIGIN": "http://192.46.233.231",
			"HOST": "127.0.0.1",
			"PORT":"3000"
		}
	}]
}

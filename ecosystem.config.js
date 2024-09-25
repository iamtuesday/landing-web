module.exports = {
	apps: [
		{
			name: '3008-landing-incanelectric-app',
			script: 'node_modules/next/dist/bin/next',
			args: 'start -p 3008', //running on port 3000
			cwd: './',
			exec_mode: 'fork',
			watch: false
		}
	]
}

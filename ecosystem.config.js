module.exports = {
	apps: [
		{
			name: '3002-landing-incanelectric-web',
			script: 'node_modules/next/dist/bin/next',
			args: 'start -p 3002',
			cwd: './',
			exec_mode: 'fork',
			watch: false
		}
	]
}

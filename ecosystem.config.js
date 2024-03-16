module.exports = {
	apps: [
		{
			name: '4004-nextjs-landing-incanelectric',
			script: 'node_modules/next/dist/bin/next',
			args: 'start -p 4004',
			cwd: './',
			exec_mode: 'fork',
			watch: false
		}
	]
}

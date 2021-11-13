module.exports = function(grunt){

	// Configuration
	grunt.initConfig({
		exec: {
			git1: 'git add --all',
			git2: 'git commit -m "A new commit"',
			git3: 'echo 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',
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-exec');

	// Register tasks
	grunt.registerTask('update', ['exec:git1', 'exec:git2', 'exec:git3']);

}

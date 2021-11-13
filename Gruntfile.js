module.exports = function(grunt){

	// Configuration
	grunt.initConfig({
		exec: {
			git1: 'git add --all',
			git2: 'git commit -m "A new commit"',
			git3: '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',
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-exec');

	// Register tasks
	grunt.registerTask('update', ['exec:git1', 'exec:git2', 'exec:git3']);

}

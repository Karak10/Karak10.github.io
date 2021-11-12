module.exports = function(grunt){

	// Configuration
	grunt.initConfig({
		exec: {
			git1: 'git add --all',
			git2: 'git commit -m "A new commit"',
			git3: 'git push origin',
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-exec');

	// Register tasks
	grunt.registerTask('push', ['exec:git1', 'exec:git2',
                                'exec:git3', 'exec:git4', 'exec:git5']);

}

module.exports = function (grunt) {
	grunt.initConfig({
		//Preprocesador css
        stylus: {
            compile: {
                options: {
                    compress: true,
                    linenos: false
                },
                files: [{
                    'css/estilos.css': 'stylus/estilos.styl',
                }]
            }
        },
		// Compresor de .js
	    uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			js: {
				files: {
					'js/main.min.js': 'javascript/*.js',
				}
			}
	    },
	    // Compilar Jade
		jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: {
					'index.php': 'jade/index.jade',
					'404.php': 'jade/404.jade',
				}
            }
        }
        //Notificaciones
        notify: {
            uglify: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 1,
                    message: "uglify iniciado!"
                }
            },
            jade: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 1,
                    message: "jade iniciado!"
                }
            },
            stylus: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 1,
                    message: "stylus iniciado!"
                }
            }
        },
        //Observar cambios
		watch: {
			options: {
				nospawn: true,
				livereload: true
			},
			//observar de stylus
			stylesheets: {
				files: ['stylus/*.styl'],
				tasks: ['stylus']
			},
			//observar de js
			scripts: {
                files: ['javascript/*.js'],
                tasks: ['uglify']
            },
            //observar el jade
			jade: {
				files: ["jade/*.jade"],
				tasks: ["jade"]
			}
		},
	});

	//Cargamos todos los tasks declarados en package.json
	require('load-grunt-tasks')(grunt);
	// Defino las tareas.
	grunt.registerTask('default', ['stylus','uglify','jade', 'notify','watch']);
};
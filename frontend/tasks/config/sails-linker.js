/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */

module.exports = function(grunt) {
  grunt.config.set('sails-linker', {
    devJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="./frontend/%s"></script>',
        appRoot: ''
      },

      files: {
        '../templates/**/*.php': require('../pipeline').jsFilesToInject
      }
    },

    devJsRelative: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="./frontend/%s"></script>',
        appRoot: '',
        relative: true
      },

      files: {
        '../templates/**/*.php': require('../pipeline').jsFilesToInject
      }
    },

    prodJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="./frontend/%s"></script>',
        appRoot: ''
      },

      files: {
        '../templates/**/*.php': ['./dist/libs.min.js', './dist/main.min.js']
      }
    },

    prodJsRelative: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="./frontend/%s"></script>',
        appRoot: '',
        relative: true
      },

      files: {
        '../templates/**/*.php': ['./dist/javascripts/libs.min.js', './dist/javascripts/main.min.js']
      }
    },

    devStyles: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="./frontend/%s">',
        appRoot: ''
      },

      files: {
        '../templates/**/*.php': require('../pipeline').cssFilesToInject
      }
    },

    prodStyles: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="./frontend/%s">',
        appRoot: ''
      },

      files: {
        '../templates/**/*.php': ['./dist/stylesheets/main.css']
      }
    },

    devStylesRelative: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="./frontend/%s">',
        appRoot: '',
        relative: true
      },

      files: {
        '../templates/**/*.php': require('../pipeline').cssFilesToInject
      }
    },

    prodStylesRelative: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="./frontend/%s">',
        appRoot: '',
        relative: true
      },

      files: {
        '../templates/**/*.php': ['./dist/stylesheets/main.css']
      }
    },
  });

  grunt.loadNpmTasks('grunt-sails-linker');

};
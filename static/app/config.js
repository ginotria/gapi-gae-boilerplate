// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "/static/assets/js/libs",
    plugins: "/static/assets/js/plugins",
    vendor: "/static/assets/js/vendor",

    // Libraries.
    jquery: "/static/assets/js/libs/jquery",
    lodash: "/static/assets/js/libs/lodash",
    backbone: "/static/assets/js/libs/backbone"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone"]
  }

});

define([
    "app",
    // Libraries.
    "jquery",
    "lodash",
    "backbone",

    // Plugins.
    "plugins/backbone.layoutmanager"
],

function(app, $, _, Backbone) {

    // Create a new module
    var Search = app.module();
    // // Example extendings
    // Search.Model = Backbone.Model.extend({ /* ... */ });
    // Search.Collection = Backbone.Collection.extend({ /* ... */ });

    Search.Views.Main = Backbone.LayoutView.extend({
        tagName: 'form',
        className: 'navbar-search',
        template: "search-main"
    });

    // Required, return the module for AMD compliance
    return Search;

});
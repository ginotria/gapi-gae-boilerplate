define([
    "app",
    // Libraries.
    "jquery",
    "lodash",
    "backbone",
    'modules/Search',

    // Plugins.
    "plugins/backbone.layoutmanager"
],

function(app, $, _, Backbone, Search) {

    // Create a new module
    var Dashboard = app.module();
    // // Example extendings
    // Dashboard.Model = Backbone.Model.extend({ /* ... */ });
    // Dashboard.Collection = Backbone.Collection.extend({ /* ... */ });
    // Dashboard.Router = Backbone.Router.extend({ /* ... */ });
    Dashboard.Layout = Backbone.Layout.extend({
        template: 'main',
        className: "layout main",
        id: "layout",
        views: {
            '.nav-collapse': new Search.Views.Main()
        }

    });

    // Required, return the module for AMD compliance
    return Dashboard;

});
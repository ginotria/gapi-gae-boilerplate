define([
    // Application.
    "app",
    //Modules
    'modules/Dashboard'
],

function(app, Dashboard) {

    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({
        routes: {
          "": "index"
        },

        index: function() {
            var that = this;

            var ALL_SCOPES = [
                'https://www.googleapis.com/auth/calendar',
                'https://www.googleapis.com/auth/drive.file'
            ];
            function auth(immediate) {
                if (immediate === undefined) {
                    immediate = true;
                }
                // Visit https://code.google.com/apis/console?api=plus to generate your
                // oauth2 client id and simple api key.
                var config = {
                    client_id: '477387775830.apps.googleusercontent.com',
                    scope: ALL_SCOPES,
                    immediate: immediate
                };
                gapi.client.setApiKey('AIzaSyCX5tf_ZU3C2cEFfuJz1ArUjGujQpCd_Po');
                window.setTimeout(function() {
                    gapi.auth.authorize(config, handleAuthResult);
                }, 1);
            }

            function handleAuthResult(authResult) {
                var authorizeButton = document.getElementById('authorize-button');
                if (authResult && !authResult.error) {
                    authorizeButton.style.visibility = 'hidden';
                    var authTimeout = (authResult.expires_in - 5 * 60) * 1000;
                    setTimeout(auth, authTimeout);
                    //ich.grabTemplates();
                    gapi.client.load('calendar', 'v3', function() {
                    });
                    gapi.client.load('drive', 'v2', function() {
                        that.initApp();
                        var r = gapi.client.drive.files.list();
                        r.execute(function(resp) {
                            console.log('Google Drive Test', resp);
                        });
                    });
                } else {
                    authorizeButton.style.visibility = '';
                    authorizeButton.onclick = handleAuthClick;
                }
            }

            function handleAuthClick(event) {
                auth(false);
            }

            auth(true);

        },
        initApp: function() {
            app.useLayout(new Dashboard.Layout());
        }

    });

    return Router;

});

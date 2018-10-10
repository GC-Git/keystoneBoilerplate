const keystone = require('keystone');


keystone.init({
    'cookie secret': 'Secretcookiestringgoesinhere', // Technically this is the only non-default option
    'name':'keystoneTest', // This is used as the site name and defaults to KeystoneJS. This will also be the name of your database in MongoDB.
    'user model': 'User', // The name of your user model. Let's use 'User' to keep things simple.
    'auto update': true, // Set this to true to enable Keystone's application update feature. This is will make it very easy to get seed data into your project.
    'auth': true, // Set this to true so accessing the Keystone admin UI requires a user to log in.
    views: 'templates/views', // A folder location relative to keystone.js to load view files from.
    'view engine': 'pug', // A template engine for Keystone to use to render view files
});

keystone.import('models');

keystone.set('routes', require('./routes'));

// Finally, we call keystone.start(), which kicks off the Keystone app.
keystone.start();

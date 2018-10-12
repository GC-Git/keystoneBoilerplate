var keystone = require('keystone');

/* The Keystone importer gives us a function that allows us to reduce a folder and its contents to an object with the same nesting. */
var importRoutes = keystone.importer(__dirname);

var routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api'),
};

module.exports = function(app){
    app.get('/', routes.views.index);
    app.get('/add-event', routes.views.addEvent);
    app.post('/add-event', routes.api.event.post);
    app.get('/all-events', routes.api.event.getAllEvents)
};
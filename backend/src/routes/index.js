const presentationRoutes = require('./presentation_routes');
const userRoutes = require('./user_routes');
const slideRoutes = require('./slide_routes');

module.exports = function(app, db) {
    presentationRoutes(app, db);
    userRoutes(app, db);
    slideRoutes(app, db);
};
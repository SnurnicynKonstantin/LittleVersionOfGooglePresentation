const presentationRoutes = require('./presentation_routes');
module.exports = function(app, db) {
    presentationRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};
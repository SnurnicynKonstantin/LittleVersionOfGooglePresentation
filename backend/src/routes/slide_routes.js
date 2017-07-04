module.exports = function(app, db) {
    app.get('/slides', (req, res) => {
        var slides = [];

        const querySelectPresentations = db.query('SELECT * FROM slides WHERE presentation_id = ($1)',
            [req.param("presentation_id")]);

        querySelectPresentations.on('row', (row) => {
            slides.push(JSON.parse(JSON.stringify(row)));
        });

        querySelectPresentations.on('end', () => {
            res.header("Access-Control-Allow-Origin",  "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
            res.send({slides, success: true});
        });

    });
};
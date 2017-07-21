module.exports = function(app, db) {
    app.get('/slides', (req, res) => {
        var slides = [];

        const querySelectPresentations = db.query('SELECT * FROM slides WHERE presentation_id = ($1)',
            [req.param("presentation_id")]);

        querySelectPresentations.on('row', (row) => {
            slides.push(JSON.parse(JSON.stringify(row)));
        });

        querySelectPresentations.on('end', () => {
            sendResponse(res, {slides, success: true});
        });

    });

    app.put('/slides', (req, res) => {
        var request = req.body;

        let presentationId = request['presentation_id'];
        let slideId = request['slide_id'];
        let title = request['title'];
        let content = request['content'];

        db.query('UPDATE slides SET title=($1), content=($2) WHERE presentation_id=($3) AND id=($4)',
            [title, content, presentationId, slideId],
            function(err, result) {
                if (err) {
                    sendResponse(res, { error: 'There was an error saving data', success: false });
                } else {
                    sendResponse(res, { success: true });
                }
            });
    });

    app.post('/slides', (req, res) => {
        var request = req.body;

        db.query('INSERT INTO slides(title, content, presentation_id) values($1, $2, $3)',
            [request['title'], request['content'], request['presentation_id']],
            function(err, result) {
                if (err) {
                    sendResponse(res, { error: 'There was an error saving data', success: false });
                } else {
                    sendResponse(res, {success: true});

                }
            }
        );
    });

    app.delete('/slides', (req, res) => {
        var request = req.body;

        db.query('DELETE FROM slides WHERE id=($1)',
            [request['id']],
            function(err, result) {
                if (err) {
                    sendResponse(res, { error: 'There was an error delete data', success: false });
                } else {
                    sendResponse(res, {success: true});

                }
            }
        );
    });
};

function sendResponse (res, answer){
    res.header("Access-Control-Allow-Origin",  "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
    res.send(answer);
}
module.exports = function(app, db) {
    app.post('/users', (req, res) => {
        var request = req.body;

        db.query('INSERT INTO users(mail) values($1)',
            [request['mail']],
            function(err, result) {

                const queryGetUserId = db.query('SELECT id FROM users WHERE mail=($1)',
                    [request['mail']]
                );

                queryGetUserId.on("row", function (row, result) {
                    result.addRow(row);
                    const userId = result.rows[0].id;
                    sendResponse(res, { user_id: userId });
                });
            }
        );
    });

    app.put('/users', (req, res) => {
        var request = req.body;

        console.log(request['presentation_id']);
        console.log(request['mail']);

        db.query('UPDATE users SET shared_presentation = array_append(shared_presentation,($1)) WHERE mail=($2)',
            [request['presentation_id'], request['mail']],
            function(err, result) {
                if (err) {
                    sendResponse(res, { error: 'There was an error saving data', success: false });
                } else {
                    sendResponse(res, { success: true });
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

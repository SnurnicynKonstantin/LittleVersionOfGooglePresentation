module.exports = function(app, db) {
    app.post('/users', (req, res) => {
        var request = req.body;
        console.log(request);

        db.query('INSERT INTO users(mail) values($1)',
            [request['mail']],
            function(err, result) {

                const queryGetUserId = db.query('SELECT id FROM users WHERE mail=($1)',
                    [request['mail']]
                );

                queryGetUserId.on("row", function (row, result) {
                    result.addRow(row);
                    const userId = result.rows[0].id;
                    console.log(userId);
                    res.header("Access-Control-Allow-Origin",  "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                    res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
                    res.send({ user_id: userId });
                });
            }
        );
    });
};
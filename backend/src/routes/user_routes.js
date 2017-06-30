module.exports = function(app, db) {
    app.post('/users', (req, res) => {
        var request = req.body;
        console.log(request);

        db.query('INSERT INTO users(mail) values($1)',
            [request['mail']],
            function(err, result) {
                if (err) {
                    res.send({ error: 'There was an error saving data', success: false });
                } else {
                    res.header("Access-Control-Allow-Origin",  "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                    res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
                    res.send({ success: true });
                }
            }
        );
    });
};
module.exports = function(app, db) {
    app.post('/presentations', (req, res) => {
        // Get user_mail, subject
        //TO-DO: Unique title
        var request = req.body;

        console.log(req.body);

        db.query('INSERT INTO presentations(subject, user_id) values($1, $2)',
                 [request['subject'], 1],
                 function(err, result) {
                     res.header("Access-Control-Allow-Origin",  "*");
                     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                     res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
                     if (err) {
                         res.send({ error: 'There was an error saving data', success: false });
                     } else {
                         res.send({ success: true });
                     }
                 }
        );
    });

    app.get('/presentations', (req, res) => {
        var presentations = [];

        const query = db.query('SELECT * FROM presentations');

        query.on('row', (row) => {
            presentations.push(JSON.parse(JSON.stringify(row)));
        });

        query.on('end', () => {
            res.header("Access-Control-Allow-Origin",  "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
            res.send({presentations, success: true});
        });

    });

    app.get('/presentation/:subject', (req, res) => {
        const request = req.params;
        var result = {};

        const query = db.query('SELECT * FROM presentations where subject = ($1) LIMIT 1', [request['subject']]);

        query.on('row', (row) => {
            result = JSON.parse(JSON.stringify(row));
        });

        query.on('end', () => {
            result.success = true;
            res.send(result);
        });

    });

    app.delete('/presentation/:subject', (req, res) => {
        const request = req.params;
        db.query('DELETE FROM items WHERE id=($1)', [request['subject']]);
    });

    app.put ('/presentation/:subject', (req, res) => {
        const oldSubject = req.params['subject'];
        const newSubject = req.body['subject']
        db.query('UPDATE presentations SET subject=($1) WHERE subject=($3)',
            [newSubject, oldSubject]);
    });
};
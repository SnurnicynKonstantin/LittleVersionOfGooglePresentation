module.exports = function(app, db) {
    app.post('/presentations', (req, res) => {
        // Get user_mail, subject
        //TO-DO: Unique title
        var request = req.body;

        console.log(req.body);

        const query = db.query('SELECT id FROM users WHERE mail = ($1)',
            [request['user_mail']]
        );

        query.on("row", function (row, result) {
            result.addRow(row);
            const userId = result.rows[0].id;
            db.query('INSERT INTO presentations(subject, user_id) values($1, $2)',
                     [request['subject'], userId],
                     function(err, result) {
                         if (err) {
                             res.send({ error: 'There was an error saving data', success: false });
                         } else {
                             db.query('SELECT MAX(Id) FROM presentations',
                                 function(err, result) {
                                     res.header("Access-Control-Allow-Origin",  "*");
                                     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                                     res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
                                     res.send({
                                         id: result.rows[0].max,
                                         subject: request['subject'],
                                         user_id: userId
                                     });
                                 });
                         }
                     }
            );
        });
    });

    app.get('/presentations', (req, res) => {
        var presentations = [];

        const querySelectPresentations = db.query('SELECT * FROM presentations WHERE user_id = ($1)',
            [req.param("user_id")]);

        querySelectPresentations.on('row', (row) => {
            presentations.push(JSON.parse(JSON.stringify(row)));
        });

        querySelectPresentations.on('end', () => {
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

    app.delete('/presentations', (req, res) => {
        var request = req.body;

        console.log(req.body);

        db.query('DELETE FROM presentations WHERE id=($1)',
            [request['id']],
            function(err, result) {
                res.header("Access-Control-Allow-Origin",  "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.header("Access-Control-Allow-Methods", "DELETE, PUT, UPDATE, HEAD, OPTIONS, GET, POST");
                if (err) {
                    res.send({ error: 'There was an error delete data', success: false });
                } else {
                    res.send({success: true});

                }
            }
        );
    });

    app.put ('/presentation/:subject', (req, res) => {
        const oldSubject = req.params['subject'];
        const newSubject = req.body['subject']
        db.query('UPDATE presentations SET subject=($1) WHERE subject=($3)',
            [newSubject, oldSubject]);
    });
};
module.exports = function(app, db) {
    app.post('/presentations', (req, res) => {
        // Get user_mail, subject
        //TO-DO: Unique title
        var request = req.body;
        console.log(request['user_mail']);

        db.query('INSERT INTO presentations(subject, user_id) values($1, $2)',
                 [request['subject'], 1],
                 function(err, result) {
                     if (err) {
                         res.send({ error: 'There was an error saving data', success: false });
                     } else {
                         res.send({ success: true });
                     }
                 }
        );
    });

    app.get('/presentations/:subject', (req, res) => {
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

    app.delete('/presentations/:subject', (req, res) => {
        const request = req.params;
        db.query('DELETE FROM items WHERE id=($1)', [request['subject']]);
    });

    app.put ('/presentations/:subject', (req, res) => {
        const oldSubject = req.params['subject'];
        const newSubject = req.body['subject']
        db.query('UPDATE presentations SET subject=($1) WHERE subject=($3)',
            [newSubject, oldSubject]);
    });
};
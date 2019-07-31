const cardController = {};

cardController.list = (req, res) => {
   
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM charactersheet', (err, characters) => {
            res.render('index', {
                data: characters
            });
        });
    });
};

module.exports = cardController;
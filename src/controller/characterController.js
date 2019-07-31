const characterController = {};

characterController.list = (req, res) => {
    //error y conexsión, si la hace haces un select * from alumno
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM charactersheet', (err, characters) => {
            res.render('character', {
                // a ver, la info del SELECT que hemos hecho la almacenamos en este caso en el parametro "characters". hacemos un res render hacia character.ejs y donde ponga data va a meter la info de la bbdd
                data: characters
            });
        });
    });
};


characterController.save = (req, res) => {
    // console.log(req.body)
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO charactersheet set ?', [data], (err, characters) => {
            res.redirect('/profile');
        });
    });
};

characterController.edit = (req,res) =>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM charactersheet WHERE id_character = ?', [id], (err, characters)=>{
            res.render('editCharacter', {
                data: characters[0]
            });
        });
    });
}; 


characterController.update=(req, res)=>{
    const id = req.params.id;
    //aqui recibo los nuevos datos
    const newcharacter = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE charactersheet set ? WHERE id_character = ?', [newcharacter, id], (err,rows) =>{
            res.redirect('/profile')
        });
    });
};


characterController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM charactersheet WHERE id_character = ?', [id], (err, characters) => {
            res.redirect('/profile');
        });
    });
};

module.exports = characterController;
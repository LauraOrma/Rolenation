const express= require('express');
const router = express.Router();

const cardController = require ('../controller/indexController');

router.get('/', cardController.list);

router.get('/profile', function(req, res, next) {
    res.render('index', { title: 'RoleNation' });
});



module.exports = router;
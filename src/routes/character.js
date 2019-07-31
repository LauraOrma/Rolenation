const express= require('express');
const router = express.Router();

const characterController = require ('../controller/characterController');

router.get('/', characterController.list);

router.post('/add', characterController.save);

router.get('/delete/:id', characterController.delete);

router.get('/edit/:id', characterController.edit);

router.post('/update/:id', characterController.update);

module.exports = router;
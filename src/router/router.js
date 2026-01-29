const express = require('express');
const router = express.Router();
const basoController = require('../controller/basoController');

router.get('/api', (req, res) => {
    res.send('Selamat datang di api SMK Telkom Makassar');
});

router.get('/data/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Selamat datang di data ${id}`);
})

router.get('/', basoController.tampilData);

router.get('/:id', basoController.getById);

router.post('/', basoController.createData);

router.put('/:id', basoController.updateData);

router.delete('/:id', basoController.deleteData);

module.exports = router;
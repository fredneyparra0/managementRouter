const { Router } = require('express');
const modelDevice = require('../models/device');

const routes = Router();

routes.get('/', async (req, res) => {
    const devices = await modelDevice.find();
    res.render('home', { devices });
});

routes.get('/see/:id', async (req, res) => {
    const device = await modelDevice.findById(req.params.id);
    res.render('see', { device });
});

routes.get('/create', (req, res) => {
    res.render('create');
});

routes.post('/createNewDevice', async (req, res) => {
    const newDevice = await modelDevice.create(req.body);
    res.redirect('/')
});

routes.get('/deleteDevice/:id', async (req, res) => {
    const deviceDeleted = await modelDevice.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

routes.get('/edit/:id', async (req, res) => {
    const device = await modelDevice.findById(req.params.id);
    res.render('edit', { device });
});

routes.post('/updateNewDevice/:id', async (req, res) => {
    await modelDevice.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/')
});


module.exports = routes;
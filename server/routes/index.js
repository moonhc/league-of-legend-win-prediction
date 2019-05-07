const router = require('express').Router();
const schema = require('../models/champ');

router.get('/', (req, res) => {
    res.status(200).send('API server is alive');
});

router.get('/champs', (req, res) => {
    schema.findMapping()
        .then((maps) => {
            if (!maps.length) return res.status(404).send({ err: 'Collection is empty'});
            res.send(maps);
        })
        .catch(err => res.status(500).send(err))
});

router.get('/:champName([A-Za-z]+)/items', (req, res) => {
    schema.findItemByName(req.params.champName)
        .then((items) => {
            if (!items) return res.status(404).send({ err: 'Item list is not found'});
            res.send(items);
        })
        .catch(err => res.status(500).send(err))
});

router.get('/:champID(\\d+)/items', (req, res) => {
    schema.findItemByID(req.params.champID)
        .then((items) => {
            if (!items) return res.status(404).send({ err: 'Item list is not found'});
            res.send(items);
        })
        .catch(err => res.status(500).send(err))
});

router.get('/:champName([A-Za-z]+)/runes', (req, res) => {
    schema.findRuneByName(req.params.champName)
        .then((items) => {
            if (!items) return res.status(404).send({ err: 'Item list is not found'});
            res.send(items);
        })
        .catch(err => res.status(500).send(err))
});

router.get('/:champID(\\d+)/runes', (req, res) => {
    schema.findRuneByID(req.params.champID)
        .then((items) => {
            if (!items) return res.status(404).send({ err: 'Item list is not found'});
            res.send(items);
        })
        .catch(err => res.status(500).send(err))
});

module.exports = router;

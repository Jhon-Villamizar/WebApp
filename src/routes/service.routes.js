//Route configuration
const express = require('express');
const router = express.Router();
const service = require('../controllers/service.controller');

/* method to obtain data */
router.get('/spaces', service.getSpaces);
router.get('/spaces/:id', service.getSpace);
/* method to create data*/
router.post('/spaces', service.postSpace);
/* method to update data */
router.put('/spaces/:id', service.putSpace);
/* method to delete data */
router.delete('/spaces/:id', service.deleteSpace);

module.exports = router;
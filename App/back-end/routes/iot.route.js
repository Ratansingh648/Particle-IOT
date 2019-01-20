'use strict';

const router = require('express').Router();
const iotController=require("../controllers/particle.iot.controller");

router.get('/getAlldata',iotController.getAllData);
router.get('/loadNewdata',iotController.refreshData);

module.exports=router;

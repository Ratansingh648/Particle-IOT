"use strict";

const iotDao = require('../dao/particle.iot.dao');
const sortBy = require('sort-array');
const request = require('request');

module.exports.getAllData = async function(req, res) {
    try {
        let data = await iotDao.loadData();
        return res.status(200).json(data);

    }
    catch (ex) {
        console.log('err', ex)
        return res.status(500).json({ 'error': 'err-0', 'message': 'Unexpected error - ' + ex });

    }
}

module.exports.refreshData = async function(req, res) {
    try {
        iotDao.receiveDataFromCloud(function(dataObject){
        
        for(var i=0;i<dataObject.length;i++)
        {
        iotDao.storeData(dataObject[i]);
        }
        
        return res.status(200).json('File has been loaded.');
        });
    }
    catch (ex) {
        console.log('err', ex)
        return res.status(500).json({ 'error': 'err-0', 'message': 'Unexpected error - ' + ex });
    }
}

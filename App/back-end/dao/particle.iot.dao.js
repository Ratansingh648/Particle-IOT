const iot = require('../models').iot;
const Sequelize = require('sequelize');
const config = require('../config/config')();
const request = require('request')

class IOTData {
    static loadData() {

        return new Promise(function (resolve, reject) {
            const sequelize = new Sequelize(config.database);
            sequelize.query('select * from iot').then((rows) => {
                console.log(rows[0]);
                resolve(rows[0]);
            })
                .catch(error => {
                    reject(error)
                });
        });
    }


    static storeData(dataObject) {

        console.log("Into the particle.iot.dao");
        
        return iot.create(dataObject)
        .then((result) => {
            console.log(result.get({plain: true}));
        }).catch((err) => {
            console.error('Database error: ' + err);
        throw err;
        });
    }


    static receiveDataFromCloud(callback){
        console.log('Loading data from the cloud');

        request({   url: 'https://api.particle.io/v1/devices',
                    headers: {'Authorization': 'Bearer be56b93e3001cd895468afa0b84f1166df3fbac2'}}, function(error,response,body){
                            if(!error && response.statusCode == 200){
                                let dataObject = JSON.parse(body);
                                callback(dataObject);
                            }}); 
    }

}
module.exports = {
    loadData: IOTData.loadData,
    storeData: IOTData.storeData,
    receiveDataFromCloud: IOTData.receiveDataFromCloud,
}

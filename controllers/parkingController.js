const { callDB } = require('../models/db')

exports.getLot = async (req, res) => {
    const lotList = await callDB('SELECT name FROM parking_lot')
    if (lotListArray.length > 0) {
        lotListArray = []
        lotList.forEach(element => {
            lotListArray.push(element.name)
        });
        res.send(lotListArray)
    }
    else
        res.send({ "response": "No Parking lot available!" })
};

exports.getLotName = async (req, res) => {
    console.log(req.params)
    const lotname = req.params.lot_name
    const lotDetails = await callDB('SELECT * FROM parking_lot where name="' + lotname + '"')
    const bayList = await callDB('SELECT * FROM bays where parkinglot_name="' + lotname + '"')
    if (lotDetails.length > 0) {
        lotDetails[0].bays = []
        bayList.forEach(element => {
            lotDetails[0].bays.push(element.bay_name)
        });
        res.send(lotDetails)
    }
    else
        res.send({ "response": "No such Parking lot name is available!" })
};

exports.getBayName = async (req, res) => {
    const lotname = req.params.lot_name
    const bayname = req.params.bay_name
    const bayList = await callDB('SELECT * FROM bays where parkinglot_name="' + lotname + '" AND bay_name="' + bayname + '"');
    if (bayList.length > 0)
        res.send(bayList[0])
    else
        res.send({ "response": "Either bay name or lot name is wrong!" })
};

exports.getData = async (req, res) => {
    console.log(req.body)
    const resp = await callDB('UPDATE SENSOR SET is_occupied =' + req.body.is_occupied + ' WHERE id="' + req.body.sensor_id + '"')
    if (resp.affectedRows === 0)
        res.send({ "response": "Sorry no such sensor is available!" })
    else if (resp.changedRows === 0)
        res.send({ "response": "Sensor value is already up to date!" })
    else
        res.send({ "response": "Successful!" })
};
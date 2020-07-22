const { callDB } = require('../models/db')

exports.getLot = async (req, res) => {
    const lotList = await callDB('SELECT name FROM parking_lot')
    lotListArray = []
    lotList.forEach(element => {
        lotListArray.push(element.name)
    });
    res.send(lotListArray)
};

exports.getLotName = async (req, res) => {
    console.log(req.params)
    const lotname = req.params.lot_name
    const lotDetails = await callDB('SELECT * FROM parking_lot where name="' + lotname + '"')
    const bayList = await callDB('SELECT * FROM bays where parkinglot_name="' + lotname + '"')
    lotDetails[0].bays = []
    bayList.forEach(element => {
        lotDetails[0].bays.push(element.bay_name)
    });

    res.send(lotDetails)
};

exports.getBayName = async (req, res) => {
    const lotname = req.params.lot_name
    const bayname = req.params.bay_name
    const bayList = await callDB('SELECT * FROM bays where parkinglot_name="' + lotname + '" AND bay_name="' + bayname + '"');

    res.send(bayList[0])
};

exports.getData = async (req, res) => {
    console.log(req.body)
    // await callDB('')
};
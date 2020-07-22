const { callDB } = require('../models/db')

exports.getLot = async (req, res) => {
    const lotList = await callDB('SELECT name FROM parking_lot')
    console.log(lotList)
    res.send(lotList)
};

exports.getLotName = async (req, res) => {

};

exports.getBayName = async (req, res) => {

};

exports.getData = async (req, res) => {

};
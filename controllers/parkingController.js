const Parking = require("../models/parkingModel.js");

exports.findAll = (req,res) => {
    Parking.getAll((err,data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });

        else res.send(data);
    });
};
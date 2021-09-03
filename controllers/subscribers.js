const subscribersModel = require("../models/subscribersModel");

const put_new_subscriber = (req, res) =>{
    const {email} = req.body;
    subscribersModel.create({email},(err, subscriber) => {
        if(err) res.status(500).send(err.message);
        res.status(201).json(subscriber);
    });
}



module.exports = {
    put_new_subscriber
}
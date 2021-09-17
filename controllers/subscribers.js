const subscribersModel = require("../models/subscribersModel");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    secure:true,
    service: 'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})

const sendEmailToNewSubscriber = (email) => {
    transporter.sendMail({
        from:"alguerocode",
        to:email,
        subject:"thank you for subscribing",
        text:"thank you for subscribing to my alguerocode portfolio website , I hope you to see my github account https://github.com/alguerocode"
    }).catch(err => console.log(err));
}

const put_new_subscriber = (req, res) =>{
    const {email} = req.body;
    subscribersModel.create({email},(err, subscriber) => {
        if(err) {
            res.setHeader("Content-Type", "text/plain");
            res.status(500).send(err.message);
        }
        sendEmailToNewSubscriber(email);
        res.status(201).json(subscriber);
    });
}

module.exports = {
    put_new_subscriber
}
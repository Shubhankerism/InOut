"use strict";
const nodemailer = require("nodemailer");
const moment = require('moment');
require('dotenv').config();

//for host

async function mailHost(basicDetails) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.senderid,
            pass: process.env.senderpass
        }
    });
    var timestamp = moment.unix(basicDetails.t);
    const time = timestamp.format('LT');
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'InOut: Entry Management Software', // sender address
        to: basicDetails.he, // list of receivers
        subject: "New Guest", // Subject line
        html: `Dear ${basicDetails.hn},<br> You have the following guest:<br> <br> Name: <b> ${basicDetails.gn}</b> 
        <br> Phone number: <b> ${basicDetails.gp}</b> <br> Email: <b> ${basicDetails.ge}</b> <br> Check in time: <b> ${time}</b> ` // html body
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
}

//for visitor
async function mailVisitor(basicDetails) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.senderid,
            pass: process.env.senderpass // generated ethereal password
        }
    });
    var timestamp = moment.unix(basicDetails.it);
    const itime = timestamp.format('LT');

    var timestamp2 = moment.unix(basicDetails.ot);
    const otime = timestamp2.format('LT');
    let mailOptions = {
        from: 'InOut: Entry Management Software', // sender address
        to: basicDetails.ge, // list of receivers
        subject: "Visit Details", // Subject line
        html: `Dear ${basicDetails.gn}, <br> You had the following visit:<br> <br> Host Name: <b> ${basicDetails.hn}</b> 
        <br>Your Phone number: <b> ${basicDetails.gp}</b> <br> Check in time: <b> ${itime}</b> <br> Check out time: <b> ${otime}</b> <br> Address: <b> Innovacer office</b> ` // html body
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
}

module.exports = { mailHost, mailVisitor };
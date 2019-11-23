const mysql2 = require('mysql2');
const con = require('../config/db').con;
const mailJS = require('./mail');
const moment = require('moment');
const axios = require('axios');

// to send message

function send_msg(details) {
    var ts = moment.unix(details.t);
    var t = ts.format('LT');
    let temp = `${details.hn}, you have a new visitor. Details are: Name: ${details.gn} Phone number: ${details.gp} Email: ${details.ge} Check in time: ${t}.`
    axios({
        method: 'get',
        url: 'https://api.msg91.com/api/sendhttp.php',
        params: {
            route: "4",
            sender: "INNOUT",
            message: temp,
            country: "91",
            mobiles: details.hp,
            authkey: "237805AB7qpQN5bn5b9d55a9"
        }
    }).then(function (response) {
        console.log("Message Sent.");
    });
};

// For testing purposes
module.exports.test = (req, res) => {

    var timestamp = moment.unix(Date.now() / 1000);
    console.log(timestamp.format('LT'));
    res.send("hola!");
}

//check-in API
module.exports.checkin = (req, res) => {
    hemail = req.body.hemail;
    hphone = req.body.hphone;
    hname = req.body.hname;
    vemail = req.body.vemail;
    vphone = req.body.vphone;
    vname = req.body.vname;

    const intime = Date.now() / 1000;
    //checking for valid email id
    let query = "SELECT id FROM checkin WHERE vemail =? AND checkedout='FALSE'"
    con.query(query, [vemail], function (err, result) {
        if (err) throw err;
        if (result.length != 0) {
            res.sendStatus(403); //invalid email ID 
        }
        else {
            let details = {
                gn: vname,
                gp: vphone,
                ge: vemail,
                he: hemail,
                hn: hname,
                hp: hphone,
                t: intime
            };
            console.log(details);
            mailJS.mailHost(details); //sending  mail
            send_msg(details);
            query = "INSERT INTO checkin(hname, hphone, hemail, vname, vphone, vemail, intime, checkedout) VALUES (?,?,?,?,?,?,?,'FALSE')";
            con.query(query, [hname, hphone, hemail, vname, vphone, vemail, intime], function (err, result2) {
                if (err) throw err;
                res.sendStatus(200);
            });
        }
    });
}

//check-out API
module.exports.checkout = (req, res) => {
    vemail = req.body.vemail;

    const out_time = Date.now() / 1000;
    //checking for valid email id
    let query = "SELECT * FROM checkin WHERE vemail =? AND checkedout='FALSE'"
    con.query(query, [vemail], function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            res.sendStatus(403); //invalid email ID 
        }
        else {

            query2 = "UPDATE checkin SET checkedout=?, out_time=? where vemail=? ";
            con.query(query2, ['1', out_time, vemail], function (err, result2) {
                if (err) throw err;
                console.log("Checked Out.");
            });

            let details = {
                gn: result[0].vname,
                gp: result[0].vphone,
                ge: vemail,
                hn: result[0].hname,
                it: result[0].intime,
                ot: out_time
            };
            console.log(details);
            mailJS.mailVisitor(details); //sending  mail
            res.sendStatus(200);

        }
    });
}

//GET current visitors
module.exports.current = (req, res) => {
    let query = "SELECT hname, vname, intime FROM checkin WHERE checkedout='0' ORDER BY intime ASC"
    con.query(query, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
}

//GET past visitors
module.exports.past = (req, res) => {
    let query = "SELECT hname,vname,intime,out_time FROM checkin WHERE checkedout='1' ORDER BY out_time DESC"
    con.query(query, function (err, result) {
        if (err) throw err;
        res.send(result);

    });
}


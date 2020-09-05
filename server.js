const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dbadduser = require("./db_add");



app.get("/adduser11", async(req, res) => {
    try {
        const input = req.query;
        await dbadduser.addUser(input);
        res.json({ message: "success" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Failure" });
    }
});

app.post("/adduser", async(req, res) => {
    try {
        const input = req.body; // before doing this

        await dbadduser.addUser(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});

app.post("/auth-user", async(req, res) => {
    try {
        const input = req.body;
        await dbadduser.authuser(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.post("/addclient", async(req, res) => {
    try {
        const input = req.body;
        await dbadduser.addclient(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.post("/addmeet", async(req, res) => {
    try {
        const input = req.body;
        await dbadduser.addmeet(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.post("/removeclient", async(req, res) => {
    try {
        const input = req.body;
        await dbadduser.removeclient(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.post("/adddept", async(req, res) => {
    try {
        const input = req.body;
        await dbadduser.adddept(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.post("/removedept", async(req, res) => {
    try {
        const input = req.body;
        await dbadduser.removedept(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.get("/showclient", async(req, res) => {
    try {
        //console.log("I am here");
        const clientdata = await dbadduser.showclient();
        //console.log("I am here tooooo");
        if (clientdata == "") {
            console.log("failed");
        } else {
            //res.setHeader
            res.send(JSON.stringify(clientdata));
            //  console.log(clientdata);
        }
        // res.json({ opr: true });
    } catch (err) {
        //res.json({ opr: false });
    }
    res.end();
});

app.get("/showdept", async(req, res) => {
    try {

        const clientdata = await dbadduser.showdept();
        //console.log("I am here tooooo");
        if (clientdata == "") {
            console.log("failed");
        } else {
            //res.setHeader
            res.send(JSON.stringify(clientdata));
            //  console.log(clientdata);
        }
        // res.json({ opr: true });
    } catch (err) {
        //res.json({ opr: false });
    }
    res.end();
});

app.get("/showmeeting", async(req, res) => {
    try {

        const clientdata = await dbadduser.showmeeting();
        //console.log("I am here tooooo");
        if (clientdata == "") {
            console.log("failed");
        } else {
            //res.setHeader
            res.send(JSON.stringify(clientdata));
            //  console.log(clientdata);
        }
        // res.json({ opr: true });
    } catch (err) {
        //res.json({ opr: false });
    }
    res.end();
});

/*app.post("/auth-admin", async(req, res) => {
    try {
        const input = req.body;
        await dbadduser.authadmin(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});*/
app.listen(3100);
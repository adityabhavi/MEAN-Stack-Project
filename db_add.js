const mysql = require("mysql");
const Promise = require("bluebird");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const con = {
    host: "127.0.0.1",
    user: "root",
    password: "7775014945",
    database: "project",
};


let addUser = async(input) => {
    const connection = mysql.createConnection(con);
    await connection.connectAsync();

    let sql = "insert into signup (fname,lname,email,ypass,cpass,mobile) values (?,?,?,?,?,?)";

    await connection.queryAsync(sql, [
        input.fname,
        input.lname,
        input.email,
        input.ypass,
        input.cpass,
        input.mobile,
    ]);

    await connection.endAsync();

}

let authuser = async(input) => {
    const connection = mysql.createConnection(con);
    await connection.connectAsync();

    let sql = "select * from dept where deptname=? and password= ?";
    const results = await connection.queryAsync(sql, [
        input.username,
        input.password,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }

};

let addclient = async(input) => {
    const connection = mysql.createConnection(con);
    await connection.connectAsync();

    let sql = "insert into client (fname,lname,mobile,email,organization,sdept,address) values (?,?,?,?,?,?,?);";

    await connection.queryAsync(sql, [
        input.fname,
        input.lname,
        input.mobile,
        input.email,
        input.organization,
        input.sdept,
        input.address,
    ]);

    await connection.endAsync();

}

let addmeet = async(input) => {
    const connection = mysql.createConnection(con);
    await connection.connectAsync();

    let sql = "insert into smeet (date,time,dept,client) values (?,?,?,?);";

    await connection.queryAsync(sql, [
        input.date,
        input.time,
        input.dept,
        input.client,
    ]);

    await connection.endAsync();

}

let removeclient = async(input) => {
    const connection = mysql.createConnection(con);
    await connection.connectAsync();

    let sql = "delete from client where organization=?";

    await connection.queryAsync(sql, [
        input.remove,
    ]);

    await connection.endAsync();

}

let adddept = async(input) => {
    const connection = mysql.createConnection(con);
    await connection.connectAsync();

    let sql = "insert into dept (dname,mobile,email,deptname,password) values (?,?,?,?,?);";

    await connection.queryAsync(sql, [
        input.dname,
        input.mobile,
        input.email,
        input.deptname,
        input.password,
    ]);

    await connection.endAsync();

}

let removedept = async(input) => {
    const connection = mysql.createConnection(con);
    await connection.connectAsync();

    let sql = "delete from dept where dname=?;";

    await connection.queryAsync(sql, [
        input.removedept,
    ]);

    await connection.endAsync();

}

let showclient = async() => {
    // console.log("1");
    const connection = mysql.createConnection(con);
    // console.log("2");
    await connection.connectAsync();
    //  console.log("3");
    let sql = "select * from client";
    //   console.log("4");
    const result = await connection.queryAsync(sql);
    //   console.log(result);
    // await connection.endAsync();
    return result;
}

let showdept = async() => {
    // console.log("1");
    const connection = mysql.createConnection(con);
    // console.log("2");
    await connection.connectAsync();
    //  console.log("3");
    let sql = "select * from dept";
    //   console.log("4");
    const result = await connection.queryAsync(sql);
    //   console.log(result);
    // await connection.endAsync();
    return result;
}

let showmeeting = async() => {
    // console.log("1");
    const connection = mysql.createConnection(con);
    // console.log("2");
    await connection.connectAsync();
    //  console.log("3");
    let sql = "select * from smeet";
    //   console.log("4");
    const result = await connection.queryAsync(sql);
    //   console.log(result);
    // await connection.endAsync();
    return result;
}



module.exports = {
    addUser,
    authuser,
    addclient,
    addmeet,
    removeclient,
    adddept,
    removedept,
    showclient,
    showdept,
    showmeeting,
};
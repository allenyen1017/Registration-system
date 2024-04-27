//使用者調整區域
var open_registration = true;

//主程式
const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const mysql = require("mysql");

var sql;
var row;
var body;
var url;

const port= 3000;
const ip = "127.0.0.1";

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wl66142628test",
    database: "test"
});

con.connect((err) =>{
    if (err) throw err;
})

const sendResponse = (filename, statusCode, response,) => {
    fs.readFile(`./html/${filename}`,(error, data) => {
        if(error){
            response.statusCode = 500;
            response.setHeader("Content-Type","text/plain")
            response.end("internal error");
        }else{
            response.statusCode = statusCode;
            response.setHeader("Content-Type","text/html");
            response.end(data);
        }
    });
};



const server = http.createServer((request,response) => {
    const method = request.method;
    url = request.url;
    if(method == "GET"){
        const requestUrl = new URL(url,`http://${ip}:${port}`);
        url = requestUrl.pathname;

        if(url =="/"||url =="/index.html"){
            sendResponse(`index.html`,200,response);
        }else{
            sendResponse(`404.html`,404,response);
        }
    }else if(method == "POST"){
        if(url == "/process-login"){
            body = [];
            request.on("data",(chunk) => {
                body.push(chunk);
            });
            request.on("end",() => {
                body = Buffer.concat(body).toString();
                body = qs.parse(body);
                
                sql = `SELECT \`username\`, \`password\` FROM \`userlist\` WHERE username = '${body.username}'`;
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    Object.keys(result).forEach((key) => {
                        row = result[key];
                        console.log(row);
                    });
                    if(body.username == row.username){  
                        if(body.password == row.password){
                        sendResponse(`大泰屋.html`,200,response);
                        if (err) throw err;
                        }else{
                        sendResponse(`登入失敗-密碼錯誤.html`,200,response);
                        }
                    }else{
                        sendResponse(`登入失敗-不存在.html`,200,response);
                    }
                });
            });
        }else if(url == "/to-register"){
            if(open_registration=true){
                sendResponse(`註冊.html`,200,response);
            }else{
                sendResponse(`無法註冊-不開放.html`,200,response);
            }
        }else if(url == "/process-register"){
            body = [];
            request.on("data",(chunk) => {
                body.push(chunk);
            });
            request.on("end",() => {
                body = Buffer.concat(body).toString();
                body = qs.parse(body);
                sql = `SELECT \`username\` FROM \`userlist\` WHERE username = '${body.username}'`;
                con.query(sql, (err, result) =>{
                    if (err) throw err;
                    Object.keys(result).forEach((key) => {
                        row = result[key];
                        console.log(row);
                    });
                    if(row.username == body.username){
                        sendResponse(`無法註冊-被使用.html`,200,response);
                    }else{
                        sql = `INSERT INTO \`userlist\` (username, password) VALUES ('${body.username}','${body.password}')`;
                        con.query(sql, (err, result) =>{
                            if (err) throw err;
                        });
                        sendResponse(`index.html`,200,response);
                    }
                });
            });     
        };
    }
});

server.listen(port, ip,() =>{
    console.log(`伺服器運轉於http://${ip}:${port}`)
});
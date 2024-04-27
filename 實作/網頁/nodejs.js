//使用者調整區域
var open_registration = false;

//主程式
const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const port= 3000;
const ip = "127.0.0.1";

const sendResponse = (filename, statusCode, response) => {
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
    var url = request.url;
    if(method == "GET"){
        const requestUrl = new URL(url,`http://${ip}:${port}`);
        url = requestUrl.pathname;

        if(url =="/"){
            sendResponse(`index.html`,200,response);
        }else if(url =="/%E5%A4%A7%E6%B3%B0%E5%B1%8B.html"){
            sendResponse(`大泰屋.html`,200,response);
        }else if(url =="/login.html"){
            sendResponse(`login.html`,200,response);
        }else{
            sendResponse(`404.html`,404,response);
        }
    }else if(method == "POST"){
        if(url == "/process-login"){
            var body = [];
            request.on("data",(chunk) => {
                body.push(chunk);
            });
            request.on("end",() => {
                body = Buffer.concat(body).toString();
                body = qs.parse(body);
                console.log(body);
            });
        }else if(url == "/to-register"){
            if(open_registration){
                sendResponse(`註冊.html`,200,response);
            }else{
                window.alert("目前不開放註冊");
                // sendResponse(`無法註冊.html`,200,response);
            }
        }
    }
});

server.listen(port, ip,() =>{
    console.log(`伺服器運轉於http://${ip}:${port}`)
});
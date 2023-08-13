//import http model

const http = require("http");
const {getAllClub, getOneClub, createNewClub,updateAnExistingClub} = require("./clubController/clubController")

//create a port

const host = "localhost://"
const port = 5050

const server = http.createServer((req, res) => {
    if (req.url === "/api/clubs" && req.method === "GET"){
        res.writeHead(200, {"content-Type" : "application/json"})
        // console.log(getAllClub)
        // res.end()
        getAllClub(req, res)   

    }else if (req.url.match( /\api\/clubs\/([0-9]+)/) && req.method === "GET"){
        res.writeHead(200, {"content-Type" : "application/json"})
        const id = req.url.split('/') [3];
        getOneClub (req, res, id ); 

    }else if(req.url === "api/newclubs" && req.method === "POST") {
        res.writeHead(201, {"content-Type" : "application/json"});
        createNewClub(req, res)
        console.log("dhdjhdhg");
        
    }else if (req.url.match( /\/api\/clubs\/ ([0-9] +) / ) && req.method === "PUT"){
        res.writeHead(200, {"content-Type" : "application/json"})
        const id = req.url.split('/') [3];
        updateAnExistingClub(req, res, id ); 
    } 
});

server.listen(port, () => {
    console.log(`server is listening to ${host}${port}`)
});
// const http = require("http")
// port = 2004

// const server = http.createServer((req, res) => {
//     //   res.setHeader("content-Type", "text/plain")
//     res.writeHead(200, {"content-Type" : "text/plain"} );
//     //   res.write("my very own server")
//       res.end("my very own server")
// });

// server.listen(port, () => {
//     console.log(`server is listening from port ${port}`);
// });




const http = require ("http");
port = 1602;

const market = [
    {
        id: 1,
        name: "boundry",
        location: "AJIF",
        size: "large",
        type: "food stuff"
    },
    {
        id: 2,
        name: "adeolu",
        location: "AJIF",
        size: "large",
        type: "fish"
    },
    {
        id: 3,
        name: "alakoto",
        location: "AJIF",
        size: "large",
        type: "cloths"
    },
    {
        id: 4,
        name: "alaba",
        location: "AJIF",
        size: "large",
        type: "phones"
    },
    {
        id: 5,
        name: "boundry",
        location: "AJIF",
        size: "large",
        type: "food stuff"
    },
]

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-Type" : "application/json"} );
//       res.end(`All the available market in lagos: \n ${JSON.stringify(market)} \n
//        The total number of market in lagos is: ${market.length}`)
// });

// server.listen(port, () => {
//     console.log(`server is listening from port ${port}`);
// });
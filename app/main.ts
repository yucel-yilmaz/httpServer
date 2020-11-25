import http from "http";

const port = 4500;
http.createServer((req, res) => {
    res.write("Server Started. \n");
    res.write("First Message Returned");
    res.end();
})
.listen(port);
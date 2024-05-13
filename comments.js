// Importing required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port number
const PORT = 3000;

// Create a server
const server = http.createServer((req, res) => {
    // Handling the home route
    if (req.url === '/' || req.url === '/index.html') {
        // Read the index.html file
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                // If there is an error reading the file, send an error response
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                // Send the contents of the file as a response
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        // If the requested file does not exist, send a 404 response
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
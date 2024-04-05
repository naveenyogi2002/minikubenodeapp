const http = require('http');
const fs = require('fs');

const imagePath = '/home/naveenkumar/Downloads/depositphotos_67943363-stock-photo-obscure-freaky-psycho-man-closeup.webp'; // Replace this with the path to your image file

const server = http.createServer((req, res) => {
    // Check if the request path is for the root URL
    if (req.url === '/image') {
        // Read the image file
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.error('Error reading image file:', err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                // Set the content type to image/jpeg
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                // Send the image data as the response
                res.end(data);
            }
        });
    } else {
        // For any other URL, respond with a simple message
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, World!');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

require('dotenv').config();

const http = require('http');

const PORT = process.env.PORT || 8080;

const requestHandler = (req, res) => {
  const responseBody = {
    status: 'ok',
    message: 'service running'
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(responseBody));
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Service is running on port ${PORT}`);
});


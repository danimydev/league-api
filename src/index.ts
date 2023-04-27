import http from 'node:http';
const port = 3000;

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});

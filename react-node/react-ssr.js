// CommonJS
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

class Stuff extends React.Component {
  render() {
    /*#__PURE__*/
    return React.createElement("html", null, 
      /*#__PURE__*/React.createElement("head", null, 
      /*#__PURE__*/React.createElement("body", null, 
      /*#__PURE__*/React.createElement("h1", null, "Hello from React with Node.js"), 
      /*#__PURE__*/React.createElement("p", null, "The date is ", new Date().toLocaleTimeString('en-AU'))));
  }
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(ReactDOMServer.renderToString(React.createElement(Stuff, null)));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
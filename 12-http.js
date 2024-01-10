const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to our home page')
    return
  }
  if(req.url === '/about'){
    res.end('Here is our short history')
    return //without return, the code will continue to run and the next line will be executed
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `)
})

server.listen(5000) // localhost:5000
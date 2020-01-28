const http = require('http');

const server = http.createServer(function(request, response) {

    let html = '';
    if(request.url == '/') {
        html = '<h1>Hello World</h1>';
    } else if (request.url == '/livros') {
        html = '<h1>Lista de Livros</h1>'
    }

    response.end(html);
});

server.listen(3333);
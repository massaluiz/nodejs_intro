module.exports = (app) => {

    app.get('/', (request, response) => {
        response.send("<h1>Hello World</h1>")
    });
    
}
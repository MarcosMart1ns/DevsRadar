const { Router } = require('express'); //importa apenas routes do express
const DevController = require ('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/teste', (res,req)=>{
    return req.send("teste")
})

routes.get('/search', SearchController.index);

module.exports = routes;
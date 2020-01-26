const express  = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors')
const app = express();

/*mongoose.connect('mongodb://devradar:<dev123>@devradarcluster-shard-00-00-xr4pj.mongodb.net:27017,devradarcluster-shard-00-01-xr4pj.mongodb.net:27017,devradarcluster-shard-00-02-xr4pj.mongodb.net:27017/test?ssl=true&replicaSet=DevRadarCluster-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})*/


mongoose.connect('mongodb://martinez90:arsenal01@omni-shard-00-00-zrpy5.mongodb.net:27017,omni-shard-00-01-zrpy5.mongodb.net:27017,omni-shard-00-02-zrpy5.mongodb.net:27017/test?ssl=true&replicaSet=Omni-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', function () {
    console.log('\n=====Conexão com o Banco estabelecida com sucesso=====\n');
   });
   mongoose.connection.on('error', function (err) {
    console.log('=====Ocorreu um erro!!!:\n ' + err);
   });
   mongoose.connection.on('disconnected', function () {
    console.log('\n=====Conexão com o Banco finalizada=====\n');
   }); 

app.use(cors())
app.use(express.json())
app.use(routes)


console.log("\nServer Ready!")

app.listen(3333);



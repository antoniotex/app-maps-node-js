var restify = require('restify');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'maps'
  }
});

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/all', function (req, res, next) {
  knex('places').then((dados) =>{
    res.send(dados);
  }, next)

  return netx();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

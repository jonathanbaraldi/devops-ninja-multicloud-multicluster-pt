var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

var async = require('async');
var fs = require('fs');
var pg = require('pg');

// DB ENV
var user = process.env.user;
var host = process.env.host;
var database = process.env.database;
var port = process.env.port;

// DEPLOYMENT ENV
var cloud = process.env.cloud;
var cluster = process.env.cluster;
var deployment = process.env.deployment;

console.log(user, host, database, port);

console.log(cloud, cluster, deployment);

var config = {
    user: user,
    host: host,
    database: database,
    port: port
};

// Create a pool.
var pool = new pg.Pool(config);

// Parsear o conteudo
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  	extended: true
}));


// Configuração da requisição, cabeçalhos, etc. CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});




// GET /book
app.get('/',function(req,res){
	

	pool.connect(function (err, client, done) {

   		if (err) {
	        console.error('could not connect to cockroachdb', err);
	        done();
	    } else {

	    	var data = {
				"error":1,
				"Books":"",
				"Total":""
			};

	    	client.query('SELECT * from files.book', (err, res2) => {
				if (err) {
			    	console.log(err.stack)
			 	} else {
			    	
			    	console.log(res2.rows[0])

			    	data["error"] = 0;
					data["Books"] = res2.rows;
					data["Total"] = res2.length;		
					res.json(data);
					done();

			  	}
			})
	    }
	});
});

// ===================================


// POST /book
app.post('/',function(req,res){

	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;

	var data = {
		"error":1,
		"Books":""
	};

	if(!!Bookname && !!Authorname && !!Price){
		
		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Books":"",
					"Total":""
				};

		    	client.query("INSERT INTO files.book ( BOOKNAME, AUTHORNAME, PRICE) VALUES ('"+Bookname+"', '"+Authorname+"', "+Price+");", (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Books"] = "Erro adicionando livro";
					}else{
						data["error"] = 0;
						data["Books"] = "Livro adicionado com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});

	} else {
		data["Books"] = "Por favor, informe todos os dados : (bookname, authorname, price)";
		res.json(data);
	}
});

// ===================================

// PUT /book
app.put('/',function(req,res){
	var Id = req.body.id;
	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;
	var data = {
		"error":1,
		"Books":""
	};
	if(!!Id && !!Bookname && !!Authorname && !!Price){
		
		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Books":"",
					"Total":""
				};

		    	client.query("UPDATE files.book SET BOOKNAME='"+Bookname+"',AUTHORNAME='"+Authorname+"', PRICE="+Price+"  WHERE ID = "+Id+";", (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Books"] = "Erro atualizando livro";
					}else{
						data["error"] = 0;
						data["Books"] = "Livro atualizado com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});




	}else{
		data["Books"] = "Por favor, informe todos os dados:  (id, bookname, authorname, price )";
		res.json(data);
		console.log(data);
	}
});

// ===================================

// DELETE /book
app.delete('/',function(req,res){
	var Id = req.body.id;
	var data = {
		"error":1,
		"Books":""
	};
	if(!!Id){
		
		

		pool.connect(function (err, client, done) {

	   		if (err) {
		        console.error('could not connect to cockroachdb', err);
		        done();
		    } else {

		    	var data = {
					"error":1,
					"Books":"",
					"Total":""
				};

				// DELETE FROM books.book WHERE ID = 2;

		    	client.query("DELETE FROM files.book WHERE ID ="+Id, (err2, res2) => {
					
		    		if(err2){
						console.log(err2)
						data["Books"] = "Erro deletando livro";
					}else{
						data["error"] = 0;
						data["Books"] = "Livro deletado com sucesso!";
					}
					res.json(data);
					done();

				})
		    }
		});

	} else {
		data["Books"] = "Por favor, informe todos os dados: ( id )  ";
		res.json(data);
		console.log(data);
	}
});

app.listen(80,function(){
	console.log("book-api online 80");
});

                var express = require('express');
                var app = express();
                var ejs = require('ejs');
                var pg = require('pg');
                var bodyParser = require('body-parser');
                app.use(bodyParser.urlencoded({ extended: true }));


                var conString = "postgres://postgres:admin@localhost:5432/FReed"; //replace with postgre db on site
                var client = new pg.Client(conString);
                client.connect();

                app.post('/save', function(req, res) {

                    var title = req.body.title;
                    console.log(title);
                    var link = req.body.link;
                    var date = req.body.date;

                    client.query("INSERT INTO feeds(title, link, published_date) VALUES ('" + title + "','" + link + "','" + date + "')  ON CONFLICT (link) DO NOTHING;", function(err, result) {
                        if (err)
                            throw err;
                    });

                    client.query("SELECT pg_sleep(1.5);", function(err, result) {
                        if (err)
                            throw err;
                    });
                });


                app.post('/fav', function(req, res) {

                    // var lol = JSON.parse(req.body);
                    var url = req.body.url;

                    client.query("INSERT INTO rss(url) VALUES ('" + url + "')  ON CONFLICT (url) DO NOTHING;", function(err, result) {
                        if (err)
                            throw err;
                    });

                    client.query("SELECT pg_sleep(1.5);", function(err, result) {
                        if (err)
                            throw err;
                    });
                });

                app.get('/list', function(req, res) {



                    var i = 0;
                    const query = client.query('SELECT * FROM rss');
                    var results = [];
                    query.on('row', (row) => {
                        results.push(row);
                        i++;
                    });

                    query.on('end', () => {
                        //console.log(results);
                        results: JSON.stringify(results);
                        res.jsonp({ results: results });
                        console.log(results);
                    });

                    //res.send(results);



                });

                app.listen(3002);
                console.log('FReed listening at port:3002');
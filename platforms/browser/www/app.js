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

                    console.log('req.body');
                    console.log(req.body.title);

                    // var lol = JSON.parse(req.body);
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
                app.listen(3002);
                console.log('FReed listening at port:3002');
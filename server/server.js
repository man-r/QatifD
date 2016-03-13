//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var pg = require('pg');

var conString = "postgres://username:passowrd@localhost/dbname";
var app = express();

app.use(myParser.json());
app.post("/getdata", function(request, response) {
    var body = request.body;
    var data = [];
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query("SELECT GUID, name, ('portfolioModal'|| modal) AS portfolioModal,bio,email,website,twitter,phone,img FROM profile;", function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('error running query', err);
        }
        data = result.rows;
        console.log(data);
        response.send(data);
        response.end();
      });
    });

});



//Start the server and make it listen for connections on port 8080

app.listen(8080);

var data = [
  {
    name: "manar sughayer",
    portfolioModal: "portfolioModal1",
    bio: "Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
    email: "man.rs85@gmail.com",
    website: "http://man-r.github.io/",
    twitter: "@man_r0",
    phone: "00000000000000000000",
    img: "img/portfolio/cabin.png"
  },
  {
    name: "manar sughayer",
    portfolioModal: "portfolioModal2",
    bio: "Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
    email: "man.rs85@gmail.com",
    website: "http://man-r.github.io/",
    twitter: "@man_r0",
    phone: "00000000000000000000",
    img: "img/portfolio/cake.png"
  },
  {
    name: "manar sughayer",
    portfolioModal: "portfolioModal3",
    bio: "Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
    email: "man.rs85@gmail.com",
    website: "http://man-r.github.io/",
    twitter: "@man_r0",
    phone: "00000000000000000000",
    img: "img/portfolio/circus.png"
  },
  {
    name: "manar sughayer",
    portfolioModal: "portfolioModal4",
    bio: "Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
    email: "man.rs85@gmail.com",
    website: "http://man-r.github.io/",
    twitter: "@man_r0",
    phone: "00000000000000000000",
    img: "img/portfolio/game.png"
  },
  {
    name: "manar sughayer",
    portfolioModal: "portfolioModal5",
    bio: "Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
    email: "man.rs85@gmail.com",
    website: "http://man-r.github.io/",
    twitter: "@man_r0",
    phone: "00000000000000000000",
    img: "img/portfolio/safe.png"
  },
  {
    name: "manar sughayer",
    portfolioModal: "portfolioModal6",
    bio: "Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!",
    email: "man.rs85@gmail.com",
    website: "http://man-r.github.io/",
    twitter: "@man_r0",
    phone: "00000000000000000000",
    img: "img/portfolio/submarine.png"
  }
];

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.records = data;
});

function login() {
  window.plugins.googleplus.login(
      {},
      function (obj) {
        console.log(obj);
      },
      function (msg) {
        console.log("error: " + msg);
      }
  );
}

function populateData() {
//   var markup = document.documentElement.innerHTML;
// alert(markup);
}
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

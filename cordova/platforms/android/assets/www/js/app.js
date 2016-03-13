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
  console.log("populateData");
  var tedata = {"name":"John", "time":"2pm"};
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var data = this.responseText;
      var scope = angular.element(document.getElementById("page-top")).scope();
      scope.$apply(function () {
        scope.records = eval('(' + data + ')');
      });
    }
  });

  xhr.open("POST", "http://192.168.1.109:8080/getdata");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(tedata));
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
;

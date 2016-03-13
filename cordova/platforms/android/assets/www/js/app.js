var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.records = data;

  $scope.serRecords = function(d) {
    console.log("serRecords");
    console.log(d);
    $scope.records = d;
    $scope.$apply();
  }
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
function ajaxResultPost(data, type, res) {

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
var data = [];

angular.module('RabbitHole', []);

angular.module('RabbitHole')
  .controller('whiteRabbit', [
    '$http',
    whiteRabbitCtrl
  ]);

function whiteRabbitCtrl($http) {
  console.log("It's working!", $http);
  var wrCtrl = this;
  wrCtrl.message = "I'm late! I'm late!";

  wrCtrl.eatWeirdCake = function(e) {
    console.log('Alice eats a weird cake Yum?');
    console.log(e);
  }

  wrCtrl.showFlavor = function(e) {
    console.log(wrCtrl.cakeFlavor, e);
  }

}

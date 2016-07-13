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
    if(e.which === 13) {
      console.log('Great flavor!!!');
    }
  }

  wrCtrl.weirdPotions = [
    'Blue',
    'Pink',
    'Chartreuse'
  ]

  wrCtrl.drinkWeirdPotion = function(potion) {
    var potionIndex = wrCtrl.weirdPotions.indexOf(potion);
    console.log('Alice drinks the weird ' + potion + ' potion');
    wrCtrl.weirdPotions.splice(potionIndex, 1);
  }

}

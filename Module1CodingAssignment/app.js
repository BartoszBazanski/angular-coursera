(function(){
    'use strict'
    angular.module('lunchChecker', [])
        .controller('lunchController', function() {
            let lunch = this;
            lunch.setMessage = function(message) {
                lunch.message = message;
            }
            lunch.check = function(){
                if(!lunch.whatIAte){
                    lunch.setMessage("Please enter data first");
                    lunch.isCorrect = false;
                    lunch.isWrong = true;
                    return;
                };
                var list = [];
                lunch.whatIAte.split(',').forEach(function(food) {
                    if(food.trim()) {
                        list.push(food.trim());
                    }
                });
                if(list.length <= 3) {
                    lunch.setMessage("Enjoy!");
                } else {
                    lunch.setMessage("Too much!");
                }
                lunch.isCorrect = true;
                lunch.isWrong = false;
            }
        })
})();

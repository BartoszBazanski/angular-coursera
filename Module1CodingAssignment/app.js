(function(){
    'use strict'
    angular.module('lunchChecker', [])
        .controller('lunchController', function() {
            var lunch = this;
            lunch.setMessage = function(message) {
                lunch.message = message;
            }
            lunch.check = function() {
                if(!lunch.whatIAte) {
                    askToEnterData();
                    return;
                };
                var list = [];
                lunch.whatIAte.split(',').forEach(function(food) {
                    if(food.trim()) {
                        list.push(food.trim());
                    }
                });

                if(!list.length) {
                    askToEnterData();
                    return;
                }

                if(list.length <= 3 && list.length > 0) {
                    lunch.setMessage("Enjoy!");
                } else {
                    lunch.setMessage("Too much!");
                }
                lunch.messageColor = 'message-correct';
                lunch.inputBorderColor = 'correct';
            }
            var askToEnterData = function() {
                lunch.setMessage("Please enter data first");
                lunch.messageColor = 'message-wrong';
                lunch.inputBorderColor = 'wrong';
            }
        })
})();

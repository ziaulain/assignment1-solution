angular.module('LunchCheck', [])
  .controller('LunchCheckController', function() {
    var LunchCheck = this;
    LunchCheck.lunchItems = '';

    LunchCheck.checkItems = function() {
      var itemsCount = LunchCheck.lunchItems.split(',').length;
      if(LunchCheck.lunchItems === '' || LunchCheck.lunchItems === undefined){
        LunchCheck.message = 'Please enter data first';
      }
      else if(itemsCount > 3) {
        LunchCheck.message = 'Too much!';
      } else {
        LunchCheck.message = 'Enjoy!';
      }
    };

  });

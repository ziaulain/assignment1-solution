angular.module('LunchCheck', [])
  .controller('LunchCheckController', function() {
    var LunchCheck = this;
    LunchCheck.lunchItems = '';

    LunchCheck.checkItems = function() {
      var itemsCount = LunchCheck.lunchItems.split(',').length;
      if(LunchCheck.lunchItems === '')
        LunchCheck.message = 'Enjoy!';
      else if(itemsCount > 3)
        LunchCheck.message = 'Too much!';
      else {
        LunchCheck.message = 'Please enter data first';
      }
    };

  });

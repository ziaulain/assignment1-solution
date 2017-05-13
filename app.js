angular.module('LunchCheck', [])
  .controller('LunchCheckController', function() {
    var LunchCheck = this;
    LunchCheck.lunchItems = '';

    LunchCheck.checkItems = function() {
      var itemsCount = LunchCheck.lunchItems.split(',').length;
      if(itemsCount === 3)
        LunchCheck.message = 'Enjoy!';
      else if(itemsCount > 3)
        LunchCheck.message = 'Too much!';    
      else if(LunchCheck.lunchItems === ''){
        LunchCheck.message = 'Please enter data first';
      }
    };

  });

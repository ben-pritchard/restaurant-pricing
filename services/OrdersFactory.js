pizzaCream.factory('OrdersFactory', function OrdersFactory() {
  var factory = {};
  factory.slices = 0;
  factory.scoops = 0;
  factory.slicesAmount = factory.slices * 3;
  factory.scoopsAmount = 0;


  factory.addSlice = function() {
    factory.slices += 1;
    // factory.slicesAmount += 3;
  };


  factory.addScoop = function() {
    factory.scoops += 1;
    factory.scoopsAmount += 3;
  };

  factory.deleteSlice = function(slice) {
    if (factory.slices > 0) {
      factory.slices -= 1;
      factory.slicesAmount -= 3;
    }

  };

  factory.deleteScoop = function(scoop) {
    if (factory.scoops > 0) {
      factory.scoops -= 1;
      factory.scoopsAmount -= 3;

    }
  };
  return factory;
});

pizzaCream.factory('OrdersFactory', function OrdersFactory() {
  var factory = {};
  factory.slices = 0;
  factory.scoops = 0;

  factory.addSlice = function() {
    factory.slices += 1;
  };

  factory.addScoop = function() {
    var scoop = { amount: factory.scoopAmount };
    factory.scoops.push(scoop);
    factory.scoopAmount = null;
  };

  factory.deleteSlice = function(slice) {
    if (factory.slices > 0) {
      factory.slices -= 1;
    }
  };

  factory.deleteScoop = function(scoop) {
    var index = factory.scoops.indexOf(scoop)
    factory.scoops.splice(index, 1);
  };
  return factory;
});

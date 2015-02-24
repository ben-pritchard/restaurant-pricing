pizzaCream.controller('CreamCtrl', function CreamCtrl($scope, OrdersFactory) {
  $scope.scoops = OrdersFactory.scoops;
  $scope.OrdersFactory = OrdersFactory;
});

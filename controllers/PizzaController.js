pizzaCream.controller("PizzaCtrl", function PizzaCtrl($scope, OrdersFactory) {
  $scope.slices = OrdersFactory.slices;
  $scope.OrdersFactory = OrdersFactory;
});

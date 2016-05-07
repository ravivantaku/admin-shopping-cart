angular.module("admin-shopping-cart")
    .controller("AdminProductEditCtrl", ["$scope","$state","$stateParams","productService", function($scope, $state, $stateParams, productService){
        console.log($stateParams.productId);
        $scope.product = productService.getProduct($stateParams.productId);
     $scope.updateProduct = function(){

     };
    }]);
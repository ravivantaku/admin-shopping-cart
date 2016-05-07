/**
 * Created by V Ravi on 20-04-2016.
 */
angular.module("admin-shopping-cart")
.controller("AdminProductsCtrl", ["$scope","productService", function($scope, productService){
        //$scope.products = [{id:0, name:"product1", cost:100, desc: "product1"},
        //    {id:1, name:"product2", cost:10, desc: "product2"}];
        $scope.products = productService.products;
        $scope.totalProducts = productService.numberOfProducts();
    }])
    .constant("Productkey", "ABC123");
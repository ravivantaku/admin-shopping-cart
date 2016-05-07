/**
 * Created by V Ravi on 07-05-2016.
 */
angular.module("admin-shopping-cart")
    .controller("AddProductCtrl", ["$scope","productService","$state", function($scope, productService,  $state){
        $scope.addProduct = function(){
            productService.addProduct($scope.product);
            $state.go("admin/products");
        };
        $scope.cancel = function(){

        };
    }]);
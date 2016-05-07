/**
 * Created by V Ravi on 04-05-2016.
 */
angular.module("admin-shopping-cart")
    .controller("LoginController", function($scope, $state){
        var loginDetails = {username: "user", password: "password"};
        console.log("login");
        $scope.login = function(){
            if($scope.username == loginDetails.username && $scope.password == loginDetails.password){
                $state.go("admin/products");
            }else {
                alert("Invalid username or password");
            }
        };
    });
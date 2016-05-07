/**
 * Created by V Ravi on 20-04-2016.
 */
angular.module("admin-shopping-cart", ["ui.router"]);

angular.module("admin-shopping-cart")
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("login");
        $stateProvider.state("login", {
            url:"/login",
            templateUrl:"common/login.html",
            controller:"LoginController"
        })
            .state("admin/products", {
                url:"/admin/products",
                templateUrl: "admin/products.html",
                controller: "AdminProductsCtrl"
            })
            .state("admin/edit/:productId", {
                url:"/admin/edit/:productId",
                templateUrl: "admin/edit.html",
                controller: "AdminProductEditCtrl"
            })
        .state("admin/addproduct", {
            url:"/admin/addproduct",
            templateUrl: "admin/addproduct.html",
            controller: "AddProductCtrl"
        });
    });

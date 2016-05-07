/**
 * Created by V Ravi on 07-05-2016.
 */
angular.module("admin-shopping-cart")
.factory("productService", function(Productkey){
          var product = {};
        product.products = [{id:0, name:"product1", cost:100, desc: "product1"},
                {id:1, name:"product2", cost:10, desc: "product2"}];

        product.addProduct = function(prod){
            prod.id = this.products.length;
            this.products.push(prod);
        };
        product.numberOfProducts = function(){
            return this.products.length;
        };
        product.getProduct = function(id){
            return this.products[id];
        };

        return product;
    });
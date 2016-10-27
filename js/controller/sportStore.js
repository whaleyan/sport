/**
 * Created by hxsd on 2016/9/22.
 */
    //主模块入口
    var myApp=angular.module("myApp",["marsFilter","marsCart","ngRoute"])

    //配置路由
    myApp.config(function($routeProvider){
        $routeProvider.when("/productList",{templateUrl:"views/productList.html",controller:"productCtrl"}),
        $routeProvider.when("/checkout",{templateUrl:"views/checkoutSummary.html",controller:"checkoutCtrl"}),
        $routeProvider.when("/placeOrder",{templateUrl:"views/placeOrder.html"}),
        $routeProvider.when("/thankYou",{templateUrl:"views/thankYou.html"}),
        $routeProvider.otherwise({templateUrl:"views/productList.html",controller:"productCtrl"})
    })
    //注册一个顶级控制器
    myApp.controller("sportCtrl",function($scope,$http,$location,myCart){
        $scope.data={
            categories:[
                {id:"1001",category:"商品类别01"},
                {id:"1002",category:"商品类别02"},
                {id:"1003",category:"商品类别03"},
                {id:"1004",category:"商品类别04"}
            ],
            products:[
                {name:"火星商品01",category:"商品类别01",price:100,desc:"2016流行款式" ,imgsrc:"images/TB1_50x50.jpg"},
                {name:"火星商品02",category:"商品类别01",price:120,desc:"2016流行款式" ,imgsrc:"images/TB1_50x50.jpg"},
                {name:"火星商品0301",category:"商品类别01",price:130,desc:"2016流行款式" ,imgsrc:"images/TB2_50x50.jpg"},
                {name:"火星商品00303",category:"商品类别01",price:110,desc:"2016流行款式" ,imgsrc:"images/TB1_50x50.jpg"},
                {name:"火星商品04",category:"商品类别02",price:130,desc:"2016流行款式" ,imgsrc:"images/TB2_50x50.jpg"},
                {name:"火星商品05",category:"商品类别02",price:510,desc:"2016流行款式" ,imgsrc:"images/TB3_50x50.jpg"},
                {name:"火星商品06",category:"商品类别02",price:610,desc:"2016流行款式" ,imgsrc:"images/TB4_50x50.jpg"},
                {name:"火星商品07",category:"商品类别03",price:310,desc:"2016流行款式" ,imgsrc:"images/TB1_50x50.jpg"},
                {name:"火星商品08",category:"商品类别03",price:300,desc:"2016流行款式" ,imgsrc:"images/TB2_50x50.jpg"},
                {name:"火星商品09",category:"商品类别04",price:400,desc:"2016流行款式" ,imgsrc:"images/TB2_50x50.jpg"},
                {name:"火星商品10",category:"商品类别04",price:400,desc:"2016流行款式" ,imgsrc:"images/TB2_50x50.jpg"}
            ],
            shipping:{}
        };
        $scope.senderOrder=function(){
            var orderData=angular.copy($scope.data.shipping);
            orderData.cart=myCart.findAll();

            $http.post("js/orderId.json",orderData)
                .success(function(okData,status){
                    //保存返回的订单号（唯一），并显示在thankYou页面上；
                    $scope.data.shipping.orderId =okData.orderId;
                    myCart.clear();
                })
                .error(function(errData,status){
                //保存失败的信息，并显示在thankYou页面上；
                    $scope.data.shipping.errMsg =errData;
                    $scope.data.shipping.errstatus =status;
                })
                .finally(function(){
                    $location.path("/thankYou")
                })
        }


    })
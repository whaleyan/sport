/**
 * Created by hxsd on 2016/9/23.
 */
angular.module("marsCart",[])
    .factory("myCart",function(){
        var cart=[];
        return {
            add:function(product){
                for(var i=0;i<cart.length;i++){
                    var item = cart[i];
                    // 判断购物车中是否已经有了该商品
                    if(item.product.name == product.name){
                        // 说明购物车中已经有了该商品，将该商品的购买数量+1
                        item.number++;
                        return; // 添加商品过程结束
                    }
                }
                // 如果代码执行到这里，说明购物车中没有要添加的商品
                // 构造一个购买项item，加入到购物筐中
                cart.push({product:product,number:1});
            },
            // 从购物车中删除某种商品的方法
            remove:function(name){
                // 遍历购物筐，找到要删除的商品
                for(var i=0;i<cart.length;i++){
                    var item = cart[i];
                    // 判断购物车中是否已经有了该商品
                    if(item.product.name == name){
                        // 说明找到了要删除的商品，将该商品的从数组中删除
                        cart.splice(i,1);
                        return; // 结束
                    }
                }
            },
            // 获得购物车中所有商品的方法
            findAll:function(){
                return cart;
            },
            // 清空购物车
            clear:function(){
                cart.length = 0;
            }
        };
})
    .controller("cartCtrl",function($scope,myCart){
        var cart=myCart.findAll();//购物车中所有的商品
        $scope.count=function(){
            var total=0;
            angular.forEach(cart,function(item){
                total += item.number;//累加，每种商品的购买数量；
            })
            return total;
            //return 100
        }
        $scope.money=function(){
            var total=0;
            angular.forEach(cart,function(item){
                total += item.number*item.product.price;//累加，每种商品的购买数量；
            })
            return total;
            //return 888.88
        }
    })

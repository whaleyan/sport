/**
 * Created by hxsd on 2016/9/22.
 */
myApp.controller("productCtrl",function($scope,myCart){
    //保存用户当前选中的商品类别
    $scope.selectedCategory=null;
    //响应用户选择商品类别操作
    $scope.selectCategory=function(category){
        $scope.selectedCategory=category;
        $scope.pageNum=1;
    };
    //过滤器函数
    $scope.filterByCategory=function(product){
        return $scope.selectedCategory == null || $scope.selectedCategory ==product.category;
    }
    $scope.pageNum=1;
    $scope.pageSize=3;

    //分页导航按钮
    $scope.selectPage=function(page){
        $scope.pageNum=page;
    }
    $scope.add=function(product){
        myCart.add(product);
    }
})

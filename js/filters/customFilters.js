/**
 * Created by hxsd on 2016/9/22.
 */
//创建一个模块
angular.module("marsFilter",[]);

//在该模块中注入一个分页过滤器
angular.module("marsFilter")
    .filter("pagesFilter",function(){
        return function(productList,pageNum,pageSize){
            //判断传进来的数据格式
            if(angular.isArray(productList) && angular.isNumber(pageNum) && angular.isNumber(pageSize)){
                var starIndex= (pageNum-1)*pageSize;
               if(starIndex>productList.length){
                   return [];
               }
                return productList.slice(starIndex,starIndex+pageSize);
            }else{
                return productList//返回传进来的数据；
            };
        }
    })
    .filter("pageNavFilter",function(){
        return function (productList,pageSize){
            if(angular.isArray(productList) && angular.isNumber(pageSize)){

                var pageNumber=Math.ceil(productList.length/pageSize);
                var nav=[];
                for(var i=0;i<pageNumber;i++){
                    nav.push(i+1);
                }
                return nav;
            }else{
                return productList;
            }
        }
    })

var app=angular.module('tableApp',[]);
app.controller('tableCtrl',function($scope){
	$scope.table=function(num1,num2){
          $scope.result=[];
    for (var i = 1; i <=num2 ; i++) { 
         var table=num1*i;
         
         $scope.result.push(table)
          console.log("khjk", table)

    }
    

	}
});
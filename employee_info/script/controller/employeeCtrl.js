"use strict";

appMaster.controller("employeeCtrl", ["$scope", function($scope){
    $scope.firstName="";
    $scope.lastName="";
    
    $scope.submit=function(){
        $scope.grossSalary =$scope.hoursWorked*$scope.hourlyRate;
        var interest=.20;
        $scope.totalTaxes= $scope.grossSalary*interest;
        $scope.netSalary= $scope.grossSalary-$scope.totalTaxes
    };
}]);
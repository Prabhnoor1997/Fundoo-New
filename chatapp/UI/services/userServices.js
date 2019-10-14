angular.module('routerApp').service('services',['$http','$state', function ($http,$state) {

    this.login = function (dataObj) {
        console.log("dataObj", dataObj);
        $http({
            method: 'POST',
            url: 'http://localhost:3010/login',
            data: dataObj
        })
            .then(function (success) {
                console.log("data after  success api call", success);
                $state.go('dashboard');
            }, function (error) {
                console.log("data after error api call", error);
            })
    }


    this.register = function (dataObj) {
        console.log("dataObj", dataObj);

        $http({
            method: 'POST',
            url: 'http://localhost:3010/register',
            data: dataObj
        })
            .then(function (success) {
               //redirect to login page
               console.log("data after  success api call", success);
               $state.go('login');

            }, function (error) {
                console.log("data after error api call", error);
            })
    }

    this.forget = function (dataObj) {
        console.log("dataObj", dataObj);

        $http({
            method: 'POST',
            url: 'http://localhost:3010/forget',
            data: dataObj
        })
            .then(function (success) {
               //redirect to login page
               console.log("data after  success api call", success);
               $state.go('login');
            }, function (error) {
                console.log("data after error api call", error);
            })
    }


    this.reset = function (dataObj,token) {
        //console.log("dataObj", dataObj);

        $http({
            method: 'POST',
            url: 'http://localhost:3010/reset',
            headers:{
                token : token 
            },
            data: dataObj
        })
            .then(function (success) {
               //redirect to login page
               console.log("data after  success api call", success);
               $state.go('login');
            }, function (error) {
                console.log("data after error api call", error);
            })
    }

    this.getUser = function (callback) {
        console.log("Inside getUser service");
        $http(  
            {  
                method: 'GET',  
                url: 'http://localhost:3010/getUser'  
            }).then(function successCallback(response)  
            {   
                //console.log(response.data.result);
                callback(null,response.data.result);
            }, function errorCallback(response)  
            {  
                response.success=false;
                reponse.message="failed to get service getUsers";
                callback(response);  
            })  
            
    }
}])
;
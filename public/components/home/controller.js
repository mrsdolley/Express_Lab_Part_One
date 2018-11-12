"use strict";

{
    angular.module('app')
        .controller("HomeController", function($http){
            const $ctrl = this;

            $http.get('get').then(response => {
                console.log(response);
        })



    })
}
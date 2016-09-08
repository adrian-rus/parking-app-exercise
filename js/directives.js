parking.directive("alert", function () {
    return {
        restrict: 'E',
        scope:{
            topic: '=',
            description: '=',
            close: '&'
        },
        templateUrl: "templates/alert.html",
        replace: true
    };
});
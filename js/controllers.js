// Registering the parkingCtrl to the parking module
    parking.controller("parkingCtrl", function ($scope, $filter) {
        $scope.appTitle = $filter("uppercase")(" Parking app ");
        $scope.alertTopic = "Something went wrong!";
        $scope.alertDescription = "You must input the plate and the color of the car!";
        $scope.closeAlert = function (){
            $scope.showAlert = false;
        };
// Binding the car's array to the scope
        $scope.cars = [];
        $scope.colors =["White", "Black", "Blue","Red","Silver"];
// Binding the park function to the scope
        $scope.park = function (car) {
            car.entrance = new Date();
            $scope.cars.push(car);
            delete $scope.car;
    };
    });
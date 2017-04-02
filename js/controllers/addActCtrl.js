    //Controlador addActCtrl: Saca los elementos de html, los guarda en un arreglo, lo transforma
    //                        en JSON y lo pasa al servicio.
    angular.module('angularSpa')
    .controller('AddActCtrl', function($scope, actorsService){
        $scope.firstName = "";
        $scope.lastName = "";        
    	$scope.postActors = function(){
            var arreglo = JSON.stringify({
                firstName: $scope.firstName,
                lastName: $scope.lastName
                });
            console.log(arreglo);
    		actorsService.postActors(arreglo);
    	}
    });
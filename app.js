//fruit//
var app = angular.module("addingPin", ["firebase"]); // inject firebase as a dependency for this module

//

angular.module('repeatSample', [])
    .controller('repeatController', ['$scope', function ($scope) {
        $scope.veggies = vegetables;
    });


var vegetables = [{
    "name": "Carrot"
}, {
    "name": "Potato"
}, {
    "name": "Broccoli"
}];


function pokeController ($scope, $filter){
	$scope.list=pins.profiles;


//	




app.controller("pinCtrl", function($scope, $firebase){
	var pinRef = new Firebase('https://homestyle.firebaseio.com/'); //connect our controller to the firebase data-store
	var sync = $firebase(pinRef); // create object out of friebase data
	$scope.bucket = sync.$asArray(); // change firebase object into an array
	// 

	$scope.addPin = function(x, y, z){
		$scope.bucket.$add({ Title: x, Link: y, Comment: z }); // firebase gives us the ability to use this $add function
		$scope.title = "";
		$scope.link = "";
		$scope.comment = "";
	}
	// After running the add function you return all your ng-model values to "" so the input boxes reset.

	$scope.deletePin = function(pin){ // you pass the delete function the argument of 'fruit' from the view layer
		var check = confirm("Are you sure you want to delete?");
		if(check == true){
			$scope.bucket.$remove(pin);	// firebase gives us the ability to use the $remove function.
		}
	}
	
})



//poke//

// var pokeApp=angular.module('poke',[])


// function pokeController ($scope, $filter){
// 	$scope.list=pokemonCharacters.profiles;
	



// /*adds sort function for specific category*/
		

// 		$scope.addPoke = function(x, y, z, a, b, c){
// 			var bedit=b.split(" ");
// 			var cedit=c.split(" ");

// 			$scope.list.push({ 
// 				name:y, image_url:x, category:z, abilities:a, type:bedit, weaknesses:cedit})
		
// 			$scope.pic="";
// 			$scope.name="";
// 			$scope.category="";
// 			$scope.abilities="";
// 			$scope.type="";
// 			$scope.weaknesses="";

// 		}


// 		$scope.deletePin=function(pokeName){
// 			var check = confirm("Are You Sure You Want To delete Pin? "
// 			+ $scope.list[pokeName].name);
// 			if(check==true){
// 			$scope.list.splice(pokeName, 1);
// 		} 
// 	};
// 			// $filter () is filtering 
// 			var orderBy = $filter('orderBy');
			 
// 			$scope.order = function(filtertype) {
//       		$scope.list = orderBy($scope.list, filtertype);

}

}


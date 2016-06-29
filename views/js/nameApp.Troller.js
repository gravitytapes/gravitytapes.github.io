
angular.module('mainApp')
	.controller('mainTroller', ['$scope', '$http', '$interval', '$timeout', function ($scope, $http, $interval, $timeout, nameFactory){

	$scope.altNames1 = [
		"Tramploline",
		"Vegtable",
		"Taquilla",
		"Victory",
		"Chocolate",
		"Diamond",
		"Melody",
		"Mystery",
		"Alcohol",
		"Pinata",
		"Uranus",
		"Slavery",
		"Octopus",
		"Casino",
		"Sophmore",
		"Hydrogen",
		"Shakespeare",
		"Wolverine"
	]

	$scope.altNames2 = [
		"Snakes",
		"Plates",
		"Steaks",
		"Capes",
		"Grapes",
		"Rapes",
		"Crepes",
		"Cakes",
		"Lakes",
		"Brakes",
		"Drakes"
	]

	//Show List
	$scope.showlist = [
		{
			where: "The Hatch",
			address: "402 15th St, Oakland, CA 94612",
			when: "July 2, 2016",
			cost: "FREE"
		},
		{
			where: "Ehler's Society",
			address: "2058 11th Arcata, CA",
			when: "July 3, 2016",
			cost: "FREE"
		},
		{
			where: "House Show",
			address: "3240 Ehlers Ln, St Helena, CA 94574",
			when: "July 4, 2016",
			cost: "FREE"
		},
		{
			where: "Ash St. Saloon",
			address: "225 SW Ash St, Portland, OR 97204",
			when: "July 5, 2016",
			cost: "$5"
		},
		{
			where: "Le Voyeur",
			address: "404 4th Ave E, Olympia, WA 98501",
			when: "July 7, 2016",
			cost: "FREE"
		},
		{
			where: "Denver Beer Co",
			address: "1695 Platte St, Denver, CO 80202",
			when: "July 9, 2016",
			cost: "FREE"
		},
		{
			where: "Syntax Physic Opera",
			address: "554 S Broadway Denver, CO",
			when: "July 14, 2016",
			cost: "$7"
		},
		{
			where: "3 Kings Tavern",
			address: "60 S Broadway, Denver, CO 80209",
			when: "August 12, 2016",
			cost: "FREE"
		}
	]

	$scope.hideName = function(){
		$scope.showName = false
	}


	$scope.altName = ""
	$scope.showName = true

	$scope.randomName = function(){
		$scope.showName = true
		$scope.altName1 = $scope.altNames1[Math.floor(Math.random() * $scope.altNames1.length)]
		$scope.altName2 = $scope.altNames2[Math.floor(Math.random() * $scope.altNames2.length)]
		$scope.altName = $scope.altName1 + " " + $scope.altName2
		$timeout($scope.hideName, 3700)
	}

	$interval($scope.randomName, 5000)




	// $scope.altName1 = $scope.altNames1[Math.floor(Math.random() * $scope.altNames1.length)]
		

	// $scope.altName2 = $scope.altNames2[Math.floor(Math.random() * $scope.altNames2.length)]
		

	// $scope.randomName = $scope.altName1 + " " + $scope.altName2




	// FOR EMAIL SUBMISSION //

	$scope.sendEmail = function(){
		console.log($scope.email)
		$http.post('api/send', $scope.email)
			.then(function(returnData){
				console.log(returnData)
				if(returnData.status !== 200) {
					alert("Sorry, there was an error. Please try again.")
				} else {
					console.log("Your message has been sent!")
				}
			})
		$scope.email = {}
	};

	}])

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
			where: "3 Kings Tavern",
			address: "60 S Broadway, Denver, CO 80209",
			when: "August 12, 2016",
			cost: "FREE"
		},
		{
			where: "Goosetown Tavern",
			address: "3242 E Colfax Ave, Denver, CO 80206",
			when: "August 19, 2016",
			cost: "FREE"
		},
		{
			where: "Gary Lee's Motorcycyle Club and Grub",
			address: "176 S Broadway, Denver, CO 80209",
			when: "September 17, 2016",
			cost: "FREE"
		},
		{
			where: "Skylark Lounge",
			address: "140 S Broadway, Denver, CO 80209",
			when: "October 15, 2016",
			cost: "FREE"
		}
	]

	$scope.removeShow = function(show){
		$scope.showlist.splice(show)
	}

	$scope.checkShowAndRemove = function(){
		var today = new Date()
		for (i = 0; i <= $scope.showlist.length; i++){
			if (today > $scope.showlist[i]){
				$scope.removeShow(i)
			}
		}
	}

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
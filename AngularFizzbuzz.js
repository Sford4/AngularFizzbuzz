var app = angular.module('myApp', ['angular.filter']);


//create array with values, repeat over it


app.controller('Results', function() {
	var vm = this;
    var results = [];
	var result = '';
	for(var i = 1; i < 101; i++){
		if(i % 3 === 0 && i % 5 === 0){
            result = "Fizzbuzz";
        }
		else if(i % 5 === 0){
			result =  "Buzz";
		}
        else if(i % 3 === 0){
            result =  "Fizz";
        }
		else{
			result = i;
		}
        results.push(result);
	}
	vm.results = results;
    console.log(vm.results);
});



module.exports = {
	arithGeo:function(arr){
		var ap, gp;
		for (i = 0; i < (arr.length - 2); i++) 
		 if (!(ap = arr[i + 1] - arr[i] == arr[i + 2] - arr[i + 1]))
		break;

		if (ap) return " Arithmetic";
		for (i = 0; i < (arr.length - 2); i++) 
		 if (!(gp = arr[i + 1]/ arr[i] == arr[i + 2]/ arr[i + 1]))  
		 break;
		 if (gp) return " Geometric";

		 if (arr.length == 0) return 0;

		 return -1;
	},
	
	findMinMax:function(arr)
	{
		var a = Math.min.apply(null, arr);
          
		var b = Math.max.apply(null, arr);
		
		if (a == b)
		{
			return [a];
		}
		else
		{
			return [a, b];
		}
	},
	
	fizzBuzz:function(number)
	{
		if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
		}
		else if (number % 3 === 0) {
			return 'Fizz';
		}
		else if (number % 5 === 0) {
			return 'Buzz';
		}
		else {
			return number;
		}
	}
}
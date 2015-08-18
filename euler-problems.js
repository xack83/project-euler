/* PROBLEM 2 */

function problem1(form) {
	var num1 = form.value1.value;

	if (isNaN(form.value1.value) || (form.value1.value < 1)) {
		alert("You must enter a positive number");
	}
	else {
		var sum1 = 0;

		for (i=1;i<num1;i++) {
			if((i%3 === 0) || (i%5 === 0)) {
	        	sum1 += i;
			}
		}
		document.getElementById("prob1").innerHTML = sum1;	
	}
	
}



/* PROBLEM 2 */

function problem2(form) {
	var num2 = form.value2.value;

	if (isNaN(num2) || num2 < 1) {
		alert("You must enter a positive number");
	}
	else {
		
		var term1 = 0;
		var term2 = 1;
		var fibo = 0;
		var sum2 = 0;
		while(fibo <= num2) {
		    fibo=term1+term2;
		    if (fibo%2 === 0) {
		        sum2 += fibo;
		    }
		    term1=term2;
		    term2=fibo;
		}
		document.getElementById("prob2").innerHTML = sum2;
	}
}


/* PROBLEM 3 */

function isPrime(n) {
	for(j=2;j<n;j++) {
		if (n%j === 0) {
			return false;
		}
	}
	return true;
}

function problem3(form) {
	var num3 = form.value3.value;

	if (isNaN(num3) || num3 < 1) {
		alert("You must enter a positive number");
	}
	else if (num3 > 9999999) {
		alert("Your number should be between 1 and 9999999");
	}
	else {
		var factors = [];

		for (i=2;i<num3;i++) {
			if (num3%i === 0 && isPrime(i)) {
				factors.push(i);
			}
		}
		if (factors.length === 0) {
			factors[0] = num3;
		}

		document.getElementById("prob3").innerHTML = factors[factors.length-1];
	}
}
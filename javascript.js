var sum = 0;

for (i=1;i<10;i++) {
	if((i%3 === 0) || (i%5 === 0)) {
        sum += i;
	}
}

alert(sum);


/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

var term1 = 0;
var term2 = 1;
var fibo = 0;
var sum = 0;
while(fibo <= 4000000) {
    fibo=term1+term2;
    if (fibo%2 === 0) {
        sum += fibo;
    }
    term1=term2;
    term2=fibo;
}
console.log(sum);
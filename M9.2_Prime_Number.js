function isPrime(number) {
    let prime = true;
    if (number <= 1)
        prime = false;
    else
        for (i = 2; i < number / 2 + 1; i = i + 1) 
            if (number % i == 0)
                prime = false;
    return prime;
}
   
tests = [0, 6, 11, 17];
for (i = 0; i < tests.length; i++)
    console.log(tests[i], "is prime?", isPrime(tests[i]));  
fizzBuzz = (n) => {
    for(var num = 1; num <= n; num++){
        if(num%5 == 0 && num%3 == 0){
            console.log(num,"FizzBuzz");
        }
        else if(num%5 == 0){
            console.log(num, "Buzz");
        }else if(num%3 == 0){
            console.log(num, "Fizz");
        }else{
            console.log(num);
        }

    }
}
fizzBuzz(15)


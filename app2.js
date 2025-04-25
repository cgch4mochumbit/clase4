"use strict"

let temperatures;
let sum;
let meanTemp;
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;

console.log(temperatures.length)

for (let i = 0; i < temperatures.length; i++) {
    /*console.log(i);*/
     sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`);



function getTemperature(values){
    if (!(values instanceof Array)){
        return NaN
    } else{
        let sum = 0;
        let i;

        for (i=0; i<values.length; i++){
            sum += values[i];
        }
        return sum / values.length
    }
}

console.log(getTemperature(10));
console.log(getTemperature([20,40,60]));


function factorial(tope){
    let num = 1;
    let result = 1;

    while (num <= tope){
        result *= num;
        ++num;
    }

    return result;

}
console.log(factorial(5));

function factorial_2(tope){
    return tope > 1 ? tope * factorial_2(tope-1): 1;
}

console.log(factorial_2(6));

function swMessage(msg){
    return msg;
}

let sw = swMessage("Hola JavaSCRIPT");
let sw_2 = swMessage;

console.log(sw_2("Hola AMIGO"));
console.log(sw);


let inner = function(){
    console.log("inner 1");
}

function suma(a, b){
    return a+b;
}

function operacion(name,a,b){
    return name(a,b);
}

console.log(operacion(suma,5,6));

let outer = function(callback){
    console.log("outer 1");
    /* setTimeout(callback,1000); asincona*/
    callback();
    console.log("outrer 2");

}

let outer_2 = function(callback){
    console.log("outer 1");
    let timerId = setInterval(callback,1000);
    console.log("outrer 2");
    setTimeout(function(){
        clearInterval(timerId);
    },7400);

}

outer(inner);
outer_2(inner);

let funct_arrow = (a,b,c) => a+b+c;
console.log(funct_arrow(10,20,30));

let names = ['Alice', 'Eve', 'John'];
function showName(element) {
     console.log(element);
}
names.forEach(showName);

names.forEach(a => {
    console.log(a);
})


function test(counter) {
    console.log("test");
    if (counter > 0)
        test(--counter);
}
test(3);

let x = 10;
function test() {
     let x = 20;
     console.log(x);
}

let xx = 10;
function test1(xx) {
     console.log(xx);
}
test1(20);

let multiply = (m, n) => {
    console.log(m * n);
}

multiply(10,20);

let a = 10;
try {
    a = 5; // ReferenceError
} finally {
    console.log(a); // -> 10
}
console.log(a);

function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000));
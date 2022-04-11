//function sum(){
//    console.log(10+10);
//}
//sum();

//let sum2 = function(){
//    console.log(3+3);
//}
//sum2();

function sum(num1,num2){
    console.log(num1+num2);
}

sum(10,10);
sum(3,3);
sum(6,2);

function sum(num1,num2){
    return num1+num2;
}

let result=sum(10,10);
console.log(result);
sum(3,3);
sum(6,2);
//NaN = Not a number --> using string

let subtotal =0;

function addCart(price){
    return subtotal += price;
}

function taxesCalculation(subtotal){
    return 1.11*subtotal;
}

subtotal = addCart(200);
subtotal = addCart(400);
subtotal = addCart(600);

console.log(`The subtotal is: ${subtotal}`);

const total = taxesCalculation(subtotal);
console.log(`The total is: ${total}`);
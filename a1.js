let a=9;
if(a>0){
console.log(a+ " is positive");    
}
else if(a<0){
console.log(a +"is negative ");    
}
else{
console.log("is zero");
}    




let b=12;
let c=8;
let d=(a*b)/2;
let e=(a*b);
console.log(d+"area of triangle");
console.log(e+ "area of rectangle");




let f=7;
if(f%2===0){
console.log(f + "is even");    
}
else{
console.log(f + "is odd");    
}




let G =- 8
if (G > 0) {
    console.log( G + " is Positive");
    if (G % 2 === 0)  {
        console.log(G + " is Even");
    } else {
     console.log(G + " is Odd");
    }

} else { (G< 0) 
    console.log(G + " is Negative"); }




let h=10;
let j=9;
let k=8;
if(h>j){
if(h>k){  
console.log(h + "is greatest"); }
}
if(j>k){
if (j>h){   
console.log(j + "is greatest");}    
}
else{
console.log(k + "k is greatest");     
}

let number=5;
let fact=1;
for(i=1; i<=number; i++){
 fact=fact*i;
}
console.log("factorial of " + number + "is" +fact);


{
for(i=1; i<=10; i++)
console.log(i);
}

{
for(i=10; i>=1; i--) 
console.log(i);       
}

{
let l=7;
let cube= l ** 3;
console.log("cube of" + l + "is" + cube);
}

{
let number=8;
for(i=1; i<=10; i++)
console.log(number + "*" + i + "=" + (number*i)); 
}   

{
let n =10;
sum = 0;
for(i=1; i<=n; i++){
sum = sum+i;    
}  
console.log("sum of " + n + "natural numbers is:" + sum);
      
}



{
const number=[1,2,3,4,5];
const squarenumbers = number.map(number=> number*number);
console.log(squarenumbers);    
}


{
const ages = [12, 17, 18, 20, 14, 25, 30];
const eligible = ages.filter(age => age >= 18);
console.log("Eligible ages:", eligible);
}



{
let s=10;
function factorial (s){
let result=1;
for(i=1; i<=10; i++){
result*=i;}
return result;   
} 
console.log("factorial of" + s + "is:" + factorial(s));   
}



{
let str="malayalam";
function palindrome (str){
if(str===str.split('').reverse().join('')){
return true;
}else{
return false;
}    
}
if(palindrome (str)){
 console.log("palindrome");      
}else{
console.log("not palindrome");    
}
}  

{
let numbers = [11, 45,18, 7, 25];
function findLargest(arr) {
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] > largest) {
largest = arr[i];
}}
return largest;
}
console.log("Largest element is:", findLargest(numbers));
 }
// 1st Program
let i;
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        document.write("FizzBuzz");
        document.write("<br>");
    }
    else if(i%3==0){
        document.write("Fizz");
        document.write("<br>");
    }
    else if(i%5==0){
        document.write("Buzz");
        document.write("<br>");
    }
    else{
        document.write(i);
        document.write("<br>");
    }
}


//2nd Program
function palindrome(str)
{
    let str1="";
    let i;
    for (i=str.length-1;i>=0;i--){ 
        str1 += str[i];
    }
    if(str==str1){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }
}
console.log(palindrome("madam"));


//3rd Program
let arr=[1,2,3,8,5,6];
let j;
let max=arr[0];
for(j=0;j<arr.length;j++){
    max=Math.max(max,arr[j]);
}
console.log(max);


//4th Program
function occ(l){
    let result={}
    for(let m=0;m<l.length;m++){
        let ch=l.charAt(m)
    
    if(!result[ch])
        result[ch]=1;
    else
        result[ch]+=1
    }
    return result;
}
console.log(occ("Haii hello"))


//5th Program
function longest(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0];
} 
console.log(longest("Hai everyone"));

//6th Program
function factorial(num){
    let k;
    let fact=1;
    for(k=1;k<=num;k++){
        fact=fact*k;
        
    }
    return(fact);
}
console.log(factorial(5));


//7th Program
function fahrenheit(celsius){
    let f=((9/5)*celsius)+32;
    return f;
}
console.log(fahrenheit(125));


//8th Program
let array=[0,1,2,3,8,6,5,4];
let x=array.length;//4
let sum1=0;
let w;
for(w=0;w<=x;w++){
    sum1=sum1+w;
}
let sum=0;
let q;
for(q=0;q<x;q++){
    sum=sum+array[q];
}
console.log(sum1-sum);

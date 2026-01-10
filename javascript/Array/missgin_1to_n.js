//find the missing number from 1 to n 
const { stdin, stdout } = require('process');
const readline=require('readline');
const rl=readline.createInterface({
    input:stdin,
    output:stdout,
}) 
let arr=[];
rl.question('enter size:',function(num){
    num=Number(num);
    rl.question('enter elements:',function(input){
        arr=input.split(' ').map(Number);
        console.log(missingNumer(arr));
        rl.close();
    })
})
function arrSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
function missingNumer(arr){
    let n=arr.length+1;
    let totalSum=parseInt(n*(n+1))/2;
    let arraySum=arrSum(arr);
    let diff=totalSum-arraySum;
    return diff;
}


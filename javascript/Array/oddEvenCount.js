//count even odd numbers 
const { stdin, stdout } = require('process');
const readline=require('readline');
const rl=readline.createInterface({
    input:stdin,
    output:stdout,
})
let arr=[];
rl.question('enter size:',function(num){
    rl.question('enter elements:',function(input){
        arr=input.split(' ').map(Number);
        evenodd(arr);
        rl.close();
    })
})
function evenodd(arr){
    let odd=0;
    let even=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd++;
        }
        else{
            even++;
        }
    }
    console.log('odd count:',odd);
    console.log('even count:',even);
    return ;
}




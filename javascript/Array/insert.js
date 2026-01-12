//insert at ith index
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
        rl.question('enter index:',function(index){
            index=Number(index);
            rl.question('enter value:',function(value){
                value=Number(value);
                insertatindex(arr,index,value);
                rl.close();
            })
        })
    })
})
function insertatindex(arr,index,value){
    arr.splice(index, 0, value);
    stdout.write(arr.join(' '));
    return ;
}





let h1=document.querySelector('h1');
    let start=document.querySelector('#start');
    let pouse=document.querySelector('#pouse');
    let restart=document.querySelector('#restart');
    let count=0;
    let timer=null;
        
    start.addEventListener('click',function(){
        if(timer==null){
            timer=setInterval(function(){
            count++;
            h1.textContent=`Time:${count}`;
        },1000)
    }
})
    pouse.addEventListener('click',function(){
    clearInterval(timer);
        timer=null;
    })
    restart.addEventListener('click',function(){
        clearInterval(timer);
        count=0;
        timer=null;
        h1.textContent=`Time:${count}`;
    })
window.onload = function () {
    var startButton=document.getElementById("startButton");
    var aimButton=document.getElementById("aimButton");
    var scoreHeader=document.getElementById("scoreHeader");
    var timeHeader=document.getElementById("timer");
    var counter= document.getElementById("counter");
    var header=document.getElementsByClassName("main-nav")[0];
    var Interval ;
    var counter=0;
    var area=[0,window.innerWidth-300,90,window.innerHeight-300];
    var direction=[0,0];
    var score;
    //start buton açma
    startButton.style.visibility='visible';
    //aim button gizleme 
    aimButton.style.visibility='hidden';
    //score hazırlama
    scoreHeader.innerHTML='Score: '+0;
    //timer hazırlama
    timeHeader.innerHTML='Timer: '+0;

    startButton.onclick = function(){
        time=5000;
        timeHeader.innerHTML='Timer: '+time;
        score=0;
        startButton.style.visibility='hidden';
        aimButton.style.visibility='visible';
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);   
    }

    aimButton.onclick =function(){
        score++;
        scoreHeader.innerHTML='Score: '+score;
        var width =window.innerWidth-300;
        var height=window.innerHeight+90-300;
        console.log(header.innerHeight);
        
        var x=(Math.floor((Math.random()*10000)%width));
        var y=(Math.floor((Math.random()*10000)%height))-(90);

        console.log(aimButton.innerHeight);
        aimButton.style.left=x+'px';
        aimButton.style.top=y+'px';
    }

    function startTimer () {
        
        timeHeader.innerHTML='Timer: '+time;
    
        area=[0,window.innerWidth-300,90,window.innerHeight-300];
        if(time%150==0){
            direction[0]=(Math.random()*3);
            if(direction[0]<1){
                direction[0]=-1;
            }else if(direction[0]<2){
                direction[0]=0;
            }else{
                direction[0]=1;
            }

            direction[1]=(Math.random()*3);
            if(direction[1]<1){
                direction[1]=-1;
            }else if(direction[1]<2){
                direction[1]=0;
            }else{
                direction[1]=1;
            }
          
        }
        var speed=5;
        //hareket
        aimButton.style.left= (aimButton.offsetLeft+direction[0]*speed)+'px';
        aimButton.style.top=(aimButton.offsetTop+direction[1]*speed)+'px';

        if(aimButton.offsetLeft<area[0]){
            aimButton.style.left=area[0]+'px';
           
        }else if(aimButton.offsetLeft>area[1]){
            aimButton.style.left=area[1]+'px';
     
        }

        if(aimButton.offsetTop<area[2]){
            aimButton.style.top=area[2]+'px';
           
        }else if(aimButton.offsetTop>area[3]){
            aimButton.style.top=area[3]+'px';
           
        }
        time--; 
        if(time<=0){
            clearInterval(Interval);
            alert("Time Over"+"\nScore:"+score);
            aimButton.style.visibility='hidden';
            startButton.style.visibility='visible';
            return 0;
        }
      }
}
window.onload = function () {
    var startButton=document.getElementById("startButton");
    var aimButton=document.getElementById("aimButton");
    var scoreHeader=document.getElementById("scoreHeader");
    var timeHeader=document.getElementById("timer");
    var Interval ;
    var counter=0;
    
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
        time=500;
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
        var width =window.innerWidth;
        var height=window.innerHeight;
        
        var x=Math.floor((Math.random()*1000)%width);
        var y=Math.floor((Math.random()*1000)%height);

        console.log(x+" , "+y);
        aimButton.style.left=x+'px';
        aimButton.style.top=y+'px';
    }

    function startTimer () {
        time--; 
        timeHeader.innerHTML='Timer: '+time;
        if(time<=0){
            clearInterval(Interval);
            alert("Time Over"+"\nScore:"+score);
            aimButton.style.visibility='hidden';
            startButton.style.visibility='visible';
            return 0;
        }
      }
}
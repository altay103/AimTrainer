window.onload = function () {
    var startButton=document.getElementById("startButton");
    var aimButton=document.getElementById("aimButton");
    var Interval ;
    var counter=0;
    var time;
    var score;
    //start buton açma
    startButton.style.visibility='visible';
    //aim button gizleme 
    aimButton.style.visibility='hidden';

    startButton.onclick = function(){
        time=5;
        score=0;
        startButton.style.visibility='hidden';
        aimButton.style.visibility='visible';
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
        
    }

    aimButton.onclick =function(){
        score++;
        var width =window.innerWidth;
        var height=window.innerHeight;
        
        var x=Math.floor((Math.random()*1000)%width);
        var y=Math.floor((Math.random()*1000)%height);

        console.log(x+" , "+y);
        aimButton.style.left=x;
        aimButton.style.top=y;
    }

    function startTimer () {
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
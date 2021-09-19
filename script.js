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
        //
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
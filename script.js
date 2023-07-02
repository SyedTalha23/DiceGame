
alert("Welcome to Dice game by Talha")
function myFunction() {
    
    var p1=Math.floor(Math.random()*6)+1;
    var p2=Math.floor(Math.random()*6)+1;
    
    document.querySelector(".img1").setAttribute("src","images/dice"+p1+".svg");
    document.querySelector(".img2").setAttribute("src","images/dice"+p2+".svg");
    
    if (p1==p2) {
        document.querySelector("#result-box").innerHTML="🤝DRAW🤝";
    }
    else if (p1>p2) {
        document.querySelector("#result-box").innerHTML="Congratulations: 🔥YOU WON🔥";
    }
    else {
        document.querySelector("#result-box").innerHTML="👎YOU LOSE👎";
    }

    document.querySelector(".btn").innerHTML="Play Again";
    document.querySelector("#i1").innerHTML="Your outcome:"
    document.querySelector("#i2").innerHTML="AI's outcome:"

  }
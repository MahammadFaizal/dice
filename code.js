var roll_btn=document.getElementById("roll_btn")
roll_btn.addEventListener("cilck",function(e){
    
    var randomno1=Math.floor(Math.random()*6)+1
    var randomimg1="images/dice1.png"
    var img1=document.getElementById("img1")
    img1.setAttribute("src",randomimg1)

    var randomno2=Math.floor(Math.random()*6)+1
    var randomimg2="images/dice"+randomno2+".png"
    var img2=document.getElementById("img2")
    img2.setAttribute("src",randomimg2)

    var res=document.getElementById("res")
    if(randomno1>randomno2){
        res.innerHTML="Player 1 WON"
    }
    else if(randomno2>randomno1){
        res.innerHTML="Player 2 WON"
    }
    else{
        res.innerHTML="Draw"
    }
})

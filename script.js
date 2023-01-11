$(document).ready(function(){
    callAll();
    console.log("ready !");

    $(window).scroll(300,function(){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $(".navigator").css({
                "padding":"1vh 10px"
            })
        }
        else{
            $(".navigator").css({
                "padding":"2vh 10px"
            })
        }

        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            $(".myPicture").css({
                "position":"fixed",
                "top":"0",
                "width": "6vw",
                "left" : "6%",
                "border" : "aliceblue 3px solid"
            })
            $(".pageTitle").css({
                "left": "17%"
            })
        }
        else{
            $(".myPicture").css({
                "position":"absolute",
                "top":"100vh",
                "width": "12vw",
                "left" : "50%",
            })
            $(".pageTitle").css({
                "left": "10%"
            })
        }
    })
    
})

function callAll(){
    const details = '[{"penname":"EXODIA THE FORBIDDEN ONE", "iframe":"//codepen.io/crisandrobasoy/embed/rNrjMmV?default-tab=js%2Cresult&theme-id=dark", "pen":"https://codepen.io/crisandrobasoy/pen/rNrjMmV","type":"codepen","message":"So Far, one of my favorate project is creating the flip animation of this cards. I created the animation for the flip effect by just using the rotateY in css but what makes this more realistic is the glare effect when hovering the card while facing up, it is done using vanilla-tilt.js im looking forward on making some other projects using this library."},{"penname":"Pure Javascript Clock", "iframe":"//codepen.io/crisandrobasoy/embed/YaBMpw/?default-tab=js%2Cresult&theme-id=dark", "pen":"https://codepen.io/crisandrobasoy/pen/YaBMpw/","type":"codepen","message":"This clock is made only with javascript. I was only a beginner when I tried to create this one. This was the result of me exploring other features of javascript, specialy in using DOM."},{"penname":"Blur and Unblur", "iframe":"//codepen.io/crisandrobasoy/embed/YarpRz/?default-tab=js%2Cresult&theme-id=dark", "pen":"https://codepen.io/crisandrobasoy/pen/YarpRz/","type":"codepen","message":"Due to my curiousity I tried emitating a glass effect using 2 divs, the one on the front is the imitated glass while the one on the back is a certain picture. It should look like a lens, blurring the back div. I made this cause I wanted to have a div that can blur other elements on its back and I havent seen one.Try Scrolling to Increase/Decrease the circumference of the circle, plus/minus to increase/decrease the blur."},{"penname":"Dark Room", "iframe":"//codepen.io/crisandrobasoy/embed/PRGQqx/?default-tab=js%2Cresult&theme-id=dark", "pen":"https://codepen.io/crisandrobasoy/pen/PRGQqx/","type":"codepen","message":"This is the simpliest way of presenting how a mousemove function do in jquery, also I added a click event listener to turn on or turn of the lights to see where your mouse cursor is located."},{"penname":"Team Logo", "imgs":["Img/Logo1.png","Img/Logo2.png","Img/Logo3.png","Img/Logo4.png","Img/Logo5.png","Img/Logo6.png","Img/Logo7.png","Img/Logo8.png","Img/Logo9.png","Img/Logo10.png","Img/Logo11.png","Img/Logo12.png"],"type":"art","message":"The logos I made using Illustrator for our team during my time at wipro, logos needs to be created using vector image to maintain its perfect resolution."},{"penname":"Cartoon Effect", "imgs":["Img/animation.jpg"],"type":"art","message":"I created a cartoon effect of myself."}]';
    var pen = JSON.parse(details);
    for(x=0;x<pen.length;x++){
        var penstart="<div class='posts'>";
        var comment = "<div class='comment'>"+pen[x]["message"]+"</div>";
        var bodyend = "</div>";

        if(pen[x]["type"]=="codepen"){
            var frame = "<iframe class='codepens' scrolling='no' title='"+pen[x]["penname"]+"' src='"+pen[x]["iframe"]+"' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>";
            var framebody = "See the Pen <a href='"+pen[x]["pen"]+"'>Blur and Unblur</a> by Crisandro Basoy (<a href='https://codepen.io/crisandrobasoy'>@crisandrobasoy</a>) on <a href='https://codepen.io'>CodePen</a>.";
            var frameend= "</iframe>";
            $('.contents').append(penstart+frame+framebody+frameend+comment+bodyend);
        }else if(pen[x]['type']=="art"){
            var frame = "";
            for(i=0;i<pen[x]['imgs'].length;i++){
                frame = frame + "<img src='"+pen[x]['imgs'][i]+"' />";
            }
            var framebody = "<div class='arts'>";
            var frameend= "</div>";
            $('.contents').append(penstart+framebody+frame+frameend+comment+bodyend);
        }
        
    }
    
}

function cardOut(cardname){
    let choosen = document.querySelector(`[data-name=${CSS.escape(cardname)}]`);
    /*$('#shadowbox').css({
        "opacity":"0",
        "visibility":"hidden"
    })*/
    if(cardname == "maincard"){
        choosen.vanillaTilt.destroy();
        $('#monstercard').css({
            "top":"0",
            "left":"0"
        })
    }else if(cardname == "coffeecard"){
        choosen.vanillaTilt.destroy();
        $('#magiccard').css({
            "top":"0",
            "left":"0"
        })
    }
    choosen.style.transform = "rotateY(180deg)";  
}

function cardIn(cardname){
    let choosen = document.querySelector(`[data-name=${CSS.escape(cardname)}]`);
    $('#shadowbox').css({
        "opacity":"1",
        "visibility":"visible"
    })
    VanillaTilt.init(choosen, {
        max: 10,
        speed: 1000,
        glare: true,
        startX: 0,
        startY: 0,
        "max-glare": 0.5,
        scale: 1.1,
        perspective: 1500
    });
    if(cardname == "maincard"){
        $('#monstercard').css({
            "top":"0",
            "left":"0"
        })
    }else if(cardname == "coffeecard"){
        $('#magiccard').css({
            "top":"0",
            "left":"0"
        })
    }
    choosen.style.transform = "rotateY(0deg)";
}
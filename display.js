var helpBut = document.getElementById("helpBut"),
    helpDiv= document.getElementById("helpDiv");

helpBut.addEventListener("click",function(){
if (helpDiv.style.display === "none") {
        helpDiv.style.display = "block";
    } else {
        helpDiv.style.display = "none";
    }
})

var weatherH = document.getElementById("hover1"),
    styleH = document.getElementById("hover2"),
    closetH = document.getElementById("hover3");

        //weatherbutton
        weatherBut.addEventListener("mouseenter",function(){
            weatherH.style.display = "block";
        });
        weatherBut.addEventListener("mouseleave",function(){
            weatherH.style.display = "none";
        });
        //stylebutton
        styleBut.addEventListener("mouseenter",function(){
            styleH.style.display = "block";
        });
        styleBut.addEventListener("mouseleave",function(){
            styleH.style.display = "none";
        });
        //closetbutton
        closetBut.addEventListener("mouseenter",function(){
            closetH.style.display = "block";
        });
        closetBut.addEventListener("mouseleave",function(){
            closetH.style.display = "none";
        });



var sunnyH = document.getElementById("sunnyHover"),
    cloudyH = document.getElementById("cloudyHover"),
    rainyH = document.getElementById("rainyHover"),
    snowyH = document.getElementById("snowyHover"),
    sunnyIcon = document.getElementById("sunnyIcon"),
    cloudyIcon = document.getElementById("cloudyIcon"),
    rainyIcon = document.getElementById("rainyIcon"),
    snowyIcon = document.getElementById("snowyIcon"),
    box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4");

var CurrWeather = [ ];



//Weatherpage  logos and hover state
        box1.addEventListener("click",function(){
            
            CurrWeather.push="sunny";
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
           document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage; 
        });
        box1.addEventListener("mouseenter",function(){
            sunnyIcon.style.opacity = 0.6;
            sunnyH.style.display= "block";

        });
        box1.addEventListener("mouseleave",function(){
            sunnyIcon.style.opacity =1;
            sunnyH.style.display= "none";
        });  
       
        box2.addEventListener("click",function(){
            
            CurrWeather.push="cloudy";
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            
            document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage;
        });
        box2.addEventListener("mouseenter",function(){
            cloudyIcon.style.opacity = 0.6;
            cloudyH.style.display= "block";

});
        box2.addEventListener("mouseleave",function(){
            cloudyIcon.style.opacity =1;
            cloudyH.style.display= "none";

});

        box3.addEventListener("click",function(){
            
            CurrWeather.push="rainy";
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage;
        });
        box3.addEventListener("mouseenter",function(){
            rainyIcon.style.opacity = 0.6;
            rainyH.style.display= "block";

});
        box3.addEventListener("mouseleave",function(){
            rainyIcon.style.opacity =1;
            rainyH.style.display= "none";

});

        box4.addEventListener("click",function(){
            
            CurrWeather.push="snowy";
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage;
        });        
        box4.addEventListener("mouseenter",function(){
            snowyIcon.style.opacity = 0.6;
            snowyH.style.display= "block";

});
        box4.addEventListener("mouseleave",function(){
            snowyIcon.style.opacity =1;
            snowyH.style.display= "none";

});


    var casualH = document.getElementById("casualHover"),
    businessH= document.getElementById("businessHover"),
    fancyH = document.getElementById("fancyHover"),
    casualIcon = document.getElementById("casualIcon"),
    businessIcon = document.getElementById("businessIcon"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    dressingpage = document.getElementById("dressingpage");

var CurrStyle = [ ];
    


//StylePage
        box5.addEventListener("click",function(){
            
            CurrStyle.push = "casual";
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            dressingpage.style.display="block";
            dressingpage.style.animation = "fadein 1.5s";
            StyleMi();
                      
        });
        box5.addEventListener("mouseenter",function(){
            casualIcon.style.opacity = 0.6;
            casualH.style.display= "block";

        });
        box5.addEventListener("mouseleave",function(){
            casualIcon.style.opacity =1;
            casualH.style.display= "none";

        });
        

        box6.addEventListener("click",function(){
            
            CurrStyle.push = "business";
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            document.getElementById("dressingpage").style.display="block";
            document.getElementById("dressingpage").style.animation = "fadein 1.5s";
            StyleMi();

        });
        box6.addEventListener("mouseenter",function(){
            businessIcon.style.opacity = 0.6;
            businessH.style.display= "block";

        });
        box6.addEventListener("mouseleave",function(){
            businessIcon.style.opacity =1;
            businessH.style.display= "none";

        });


        box7.addEventListener("click",function(){
            
            CurrStyle.push = "fancy";
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            document.getElementById("dressingpage").style.display="block";
            document.getElementById("dressingpage").style.animation = "fadein 1.5s";
            StyleMi();
        });
        box7.addEventListener("mouseenter",function(){
            fancyIcon.style.opacity = 0.6;
            fancyH.style.display= "block";

        });
        box7.addEventListener("mouseleave",function(){
            fancyIcon.style.opacity =1;
            fancyH.style.display= "none";

        });


/****************FUNCTION*******************/

function StyleMi() {
   
    for (i = 0; i <gender.length; i++){
    if (gender[i] == "femaleGen"){
        alert(gender,CurrStyle,CurrWeather);
        
    } else if ( gender [i] == "maleGen"){
        alert("male");
    }
}
}

//Showing about us and about app//
document.getElementById("AboutUs").addEventListener("click",function(){
    document.getElementById("aboutUsBox").style.display ="block"; 
});
document.getElementById("AboutApp").addEventListener("click",function(){
    document.getElementById("aboutAppBox").style.display ="block"; 
});
document.getElementById("aboutUsBox").addEventListener("click",function(){
    this.style.display ="none";
});
document.getElementById("aboutAppBox").addEventListener("click",function(){
    this.style.display ="none";
});

var landingpage = document.getElementById("pagewrap"),
    firstpage = document.getElementById("firstpage"),
    secondpage = document.getElementById("secondpage"),
    nameDiv = document.getElementById("nameDiv"),
    female = document.getElementById("female"),
    male = document.getElementById("male"),
    formNotifs = document.getElementById("formnotifs"),
    secondpage = document.getElementById("secondpage");
var gender = [ ];


//Moving to the next page//
        document.getElementById("next").addEventListener("click",function(){
            landingpage.style.display="none";
            landingpage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
        });
        document.getElementById("start").addEventListener("click",function(){
            console.log (female.checked, male.checked);
            if(female.checked){
            gender.push("femaleGen");
            firstpage.style.display="none";
            firstpage.style.animation = "fadeout 1.5s";
            secondpage.style.display="block";
            secondpage.style.animation = "fadein 1.5s";

            nameDiv.innerHTML = document.getElementById("name").value;

            secondpage.style.backgroundImage = "url(SVG/bg1.svg)";
            formNotifs.style.display="none";
            console.log(gender);
            }else if(male.checked){
              gender.push("maleGen");
            firstpage.style.display="none";
            firstpage.style.animation = "fadeout 1.5s";
            secondpage.style.display="block";
            secondpage.style.animation = "fadein 1.5s";

            nameDiv.innerHTML = document.getElementById("name").value;
                secondpage.style.backgroundImage = "url(SVG/bg2.svg)";
                formNotifs.style.display="none";
                console.log(gender);
            }else {
                formNotifs.style.display="block";
                formNotifs.style.animation = "fadeinfadeout";
            } 
        });

var weatherBut = document.getElementById("Weather"),
    styleBut = document.getElementById("Style"),
    closetBut = document.getElementById("Closet"), 
    stylepage= document.getElementById("stylepage"),
    weatherpage = document.getElementById("weatherpage");
    
        weatherBut.addEventListener("click",function(){
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";
        });
        styleBut.addEventListener("click",function(){
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
        });


        //settings button goes back to form page
        document.getElementById("settings1").addEventListener("click",function(){
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
            gender= [ ];
        });
        document.getElementById("settings2").addEventListener("click",function(){
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
            gender= [ ];
        });
        document.getElementById("settings3").addEventListener("click",function(){
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
            gender= [ ];
        });





// BACK BUTTON 

        document.getElementById("goBack").addEventListener("click",function(){
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            secondpage.style.display="block";
            secondpage.style.animation = "fadein 1.5s";

        });
             document.getElementById("goBack1").addEventListener("click",function(){
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";

        });     
            document.getElementById("goBack2").addEventListener("click",function(){
            dressingpage.style.display="none";
            dressingpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";

        });


/*************************************************************/




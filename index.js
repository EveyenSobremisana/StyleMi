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

var styleBut = document.getElementById("Style"),
    closetBut = document.getElementById("Closet"), 
    stylepage= document.getElementById("stylepage"),
    closetpage = document.getElementById("closetpage");
    
        styleBut.addEventListener("click",function(){
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";
        });

        closetBut.addEventListener("click",function(){
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            closetpage.style.display="block";
            closetpage.style.animation = "fadein 1.5s";
        });


        //settings button goes back to form page
        document.getElementById("settings1").addEventListener("click",function(){
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
            gender= [ ];
            CurrWeather= [ ];
            CurrStyle = [ ];
        });
        document.getElementById("settings2").addEventListener("click",function(){
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
            gender= [ ];
            CurrWeather= [ ];
            CurrStyle = [ ];
        });
        document.getElementById("settings3").addEventListener("click",function(){
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
            gender= [ ];
            CurrWeather= [ ];
            CurrStyle = [ ];
        });
        document.getElementById("settings4").addEventListener("click",function(){
            document.getElementById("closetpage").style.display="none";
            document.getElementById("closetpage").style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
            gender= [ ];
            CurrWeather= [ ];
            CurrStyle = [ ];
        });





// BACK BUTTON 

        document.getElementById("goBack").addEventListener("click",function(){
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            secondpage.style.display="block";
            secondpage.style.animation = "fadein 1.5s";
            
            

        });
             CurrWeather= [ ];
            CurrStyle = [ ]; document.getElementById("goBack1").addEventListener("click",function(){
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";
            
           

        });     
            document.getElementById("goBack2").addEventListener("click",function(){
            CurrWeather= [ ];
            CurrStyle = [ ];
            dressingpage.style.display="none";
            dressingpage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";
            
            

        });

            document.getElementById("goBack3").addEventListener("click",function(){
            CurrWeather= [ ];
            CurrStyle = [ ];
            closetpage.style.display="none";
            closetpage.style.animation = "fadeout 1.5s";
            dressingpage.style.display="block";
            dressingpage.style.animation = "fadein 1.5s";
            
            

        });

            document.getElementById("goToCloset").addEventListener("click",function(){
             CurrWeather= [ ];
            CurrStyle = [ ];
                dressingpage.style.display="none";
            dressingpage.style.animation = "fadeout 1.5s";
            closetpage.style.display="block";
            closetpage.style.animation = "fadein 1.5s";
            });
            
           


/*************************************************************/




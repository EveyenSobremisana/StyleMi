//Showing about us and about app//
document.getElementById("AboutUs").addEventListener("click",function(){
	sfx1.play();
	sfx1.volume = 0.5;
    document.getElementById("aboutUsBox").style.display ="block"; 
});
document.getElementById("AboutApp").addEventListener("click",function(){
	sfx1.play();
	sfx1.volume = 0.5;
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
            CurrWeather= [ ];
            CurrStyle = [ ];
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
            CurrWeather= [ ];
            CurrStyle = [ ];
                console.log(gender);
            }else {
                formNotifs.style.display="block";
                formNotifs.style.animation = "fadeinfadeout";
            } 
        });

var styleBut = document.getElementById("Style"),
    closetBut = document.getElementById("Closet"), 
    closetB = document.getElementById("hidecloset"), 
    stylepage= document.getElementById("stylepage"),
    closetpage = document.getElementById("closetpage");
    
        styleBut.addEventListener("click",function(){
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";
        });
// unefficient way of showing the notifs
        closetB.addEventListener("click",function(){ 
             document.getElementById("closetnotifs").style.display = "block";
        });

        closetBut.addEventListener("click",function(){
            
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            
            
            closetpage.style.display="block";
            closetpage.style.animation = "fadein 1.5s";
        });





        //settings button goes back to form page
        document.getElementById("home1").addEventListener("click",function(){
			gender= [];
			CurrWeather= [];
            CurrStyle = [];
            secondpage.style.display="none";
            secondpage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";

        });
        document.getElementById("home2").addEventListener("click",function(){
			gender= [];
			CurrWeather= [];
            CurrStyle = [];
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";

        });
        document.getElementById("home3").addEventListener("click",function(){
			gender= [];
			CurrWeather= [];
            CurrStyle = [];
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";


        });
        document.getElementById("home4").addEventListener("click",function(){
            //inefficient way//
            closetB.style.zIndex = 0;
            document.getElementById("closetnotifs").style.display = "none";
            display.innerHTML = "";
            document.getElementById("closetpage").style.display="none";
            document.getElementById("closetpage").style.animation = "fadeout 1.5s";
            firstpage.style.display="block";
            firstpage.style.animation = "fadein 1.5s";
			document.getElementById("dress").style.backgroundImage = "";
            gender= [];
            CurrWeather= [];
            CurrStyle = [];
        });



// BACK BUTTON 

        document.getElementById("goBack").addEventListener("click",function(){
         
			weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            secondpage.style.display="block";
            secondpage.style.animation = "fadein 1.5s";
            
            

        });
        document.getElementById("goBack1").addEventListener("click",function(){
            CurrWeather= [];
            CurrStyle = [];
			stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";
            
           

        });     
        document.getElementById("goBack2").addEventListener("click",function(){
            CurrWeather= [];
            CurrStyle = [];
			document.getElementById("facts").style.display = "none";		
			document.getElementById("factsin").innerHTML= "";
            dressingpage.style.display="none";
            dressingpage.style.animation = "fadeout 1.5s";
            weatherpage.style.display="block";
            weatherpage.style.animation = "fadein 1.5s";
            
            

        });
        document.getElementById("goBack3").addEventListener("click",function(){
//            CurrWeather= [];
//            CurrStyle = [];
			display.innerHTML = "";
            closetpage.style.display="none";
            closetpage.style.animation = "fadeout 1.5s";
            dressingpage.style.display="block";
            dressingpage.style.animation = "fadein 1.5s";
            
            

        });
       
       
//audio

var sfx1 = new Audio ("sfx1.mp3"),
	sfx2 = new Audio ("sfx2.mp3"),
	sfx3 = new Audio ("sfx3.mp3"),
	sfx4 = new Audio ("sfx4.mp3");

document.getElementById("helpBut").addEventListener("click",function(){
	sfx1.play();
	sfx1.volume = 0.5;
})

           








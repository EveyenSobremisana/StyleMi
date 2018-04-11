var aboutUs= document.getElementById("AboutUs"),
    aboutApp= document.getElementById("AboutApp"),
    nextpage = document.getElementById("next"),
    landingpage = document.getElementById("pagewrap"),
    firstpage = document.getElementById("firstpage"),
    secondpage = document.getElementById("secondpage"),
    aboutUsBox = document.getElementById("aboutUsBox"),
    aboutAppBox = document.getElementById("aboutAppBox"),
    startBut = document.getElementById("start"),
    secondpage = document.getElementById("secondpage"),    
    weatherBut = document.getElementById("Weather"),
    styleBut = document.getElementById("Style"),
    closetBut = document.getElementById("Closet"),
    nameDiv = document.getElementById("nameDiv"),
    female = document.getElementById("female"),
    male = document.getElementById("male"),
    s1 = document.getElementById("settings1"),
    s2 = document.getElementById("settings2"),
    s3 = document.getElementById("settings3"),
    formNotifs = document.getElementById("formnotifs"),
    weatherpage = document.getElementById("weatherpage"),
    sunnyIcon = document.getElementById("sunnyIcon"),
    cloudyIcon = document.getElementById("cloudyIcon"),
    rainyIcon = document.getElementById("rainyIcon"),
    snowyIcon = document.getElementById("snowyIcon"),
    sunnyH = document.getElementById("sunnyHover"),
    cloudyH = document.getElementById("cloudyHover"),
    rainyH = document.getElementById("rainyHover"),
    snowyH = document.getElementById("snowyHover"),
    weatherH = document.getElementById("hover1"),
    styleH = document.getElementById("hover2"),
    closetH = document.getElementById("hover3"),
    goBack = document.getElementById("goBack"),
    goNext = document.getElementById("goNext"),
    goBack1 = document.getElementById("goBack1"),
    goNext1 = document.getElementById("goNext1"),
    stylepage= document.getElementById("stylepage"),
    casualH = document.getElementById("casualHover"),
    businessH= document.getElementById("businessHover"),
    fancyH = document.getElementById("fancyHover"),
    casualIcon = document.getElementById("casualIcon"),
    businessIcon = document.getElementById("businessIcon"),
    fancyIcon = document.getElementById("fancyIcon"),
    box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7");


//Showin about us and about app//
aboutUs.addEventListener("click",function(){
    aboutUsBox.style.display ="block"; 
});
aboutApp.addEventListener("click",function(){
    aboutAppBox.style.display ="block"; 
});
aboutUsBox.addEventListener("click",function(){
    this.style.display ="none";
});
aboutAppBox.addEventListener("click",function(){
    this.style.display ="none";
});

//Moving to the next page//
nextpage.addEventListener("click",function(){
    landingpage.style.display="none";
    landingpage.style.animation = "fadeout 1.5s";
    firstpage.style.display="block";
    firstpage.style.animation = "fadein 1.5s";
});
startBut.addEventListener("click",function(){
    console.log (female.checked, male.checked);
    if(female.checked){
    firstpage.style.display="none";
    firstpage.style.animation = "fadeout 1.5s";
    secondpage.style.display="block";
    secondpage.style.animation = "fadein 1.5s";
    
    nameDiv.innerHTML = document.getElementById("name").value;
    
    secondpage.style.backgroundImage = "url(SVG/bg1.svg)";
        formNotifs.style.display="none";
    }else if(male.checked){
    firstpage.style.display="none";
    firstpage.style.animation = "fadeout 1.5s";
    secondpage.style.display="block";
    secondpage.style.animation = "fadein 1.5s";
    
    nameDiv.innerHTML = document.getElementById("name").value;
        secondpage.style.backgroundImage = "url(SVG/bg2.svg)";
        formNotifs.style.display="none";
    }else {
        formNotifs.style.display="block";
        formNotifs.style.animation = "fadeinfadeout";
    } 
});
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

goBack.addEventListener("click",function(){
    weatherpage.style.display="none";
    weatherpage.style.animation = "fadeout 1.5s";
    secondpage.style.display="block";
    secondpage.style.animation = "fadein 1.5s";

});
goNext.addEventListener("click",function(){
    weatherpage.style.display="none";
    weatherpage.style.animation = "fadeout 1.5s";
    stylepage.style.display="block";
    stylepage.style.animation = "fadein 1.5s";

});

goBack1.addEventListener("click",function(){
    stylepage.style.display="none";
    stylepage.style.animation = "fadeout 1.5s";
    weatherpage.style.display="block";
    weatherpage.style.animation = "fadein 1.5s";

});
goNext1.addEventListener("click",function(){
    weatherpage.style.display="none";
    weatherpage.style.animation = "fadeout 1.5s";
    stylepage.style.display="block";
    stylepage.style.animation = "fadein 1.5s";

});



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

//settings button goes back to form page
s1.addEventListener("click",function(){
    secondpage.style.display="none";
    secondpage.style.animation = "fadeout 1.5s";
    firstpage.style.display="block";
    firstpage.style.animation = "fadein 1.5s";
});
s2.addEventListener("click",function(){
    weatherpage.style.display="none";
    weatherpage.style.animation = "fadeout 1.5s";
    firstpage.style.display="block";
    firstpage.style.animation = "fadein 1.5s";
});
s3.addEventListener("click",function(){
    stylepage.style.display="none";
    stylepage.style.animation = "fadeout 1.5s";
    firstpage.style.display="block";
    firstpage.style.animation = "fadein 1.5s";
});

//Weatherpage  logos and hover state

box1.addEventListener("mouseenter",function(){
    sunnyIcon.style.opacity = 0.6;
    sunnyH.style.display= "block";

});
box1.addEventListener("mouseleave",function(){
    sunnyIcon.style.opacity =1;
    sunnyH.style.display= "none";

});

box2.addEventListener("mouseenter",function(){
    cloudyIcon.style.opacity = 0.6;
    cloudyH.style.display= "block";

});
box2.addEventListener("mouseleave",function(){
    cloudyIcon.style.opacity =1;
    cloudyH.style.display= "none";

});

box3.addEventListener("mouseenter",function(){
    rainyIcon.style.opacity = 0.6;
    rainyH.style.display= "block";

});
box3.addEventListener("mouseleave",function(){
    rainyIcon.style.opacity =1;
    rainyH.style.display= "none";

});

box4.addEventListener("mouseenter",function(){
    snowyIcon.style.opacity = 0.6;
    snowyH.style.display= "block";

});
box4.addEventListener("mouseleave",function(){
    snowyIcon.style.opacity =1;
    snowyH.style.display= "none";

});

//StylePage

box5.addEventListener("mouseenter",function(){
    casualIcon.style.opacity = 0.6;
    casualH.style.display= "block";

});
box5.addEventListener("mouseleave",function(){
    casualIcon.style.opacity =1;
    casualH.style.display= "none";

});

box6.addEventListener("mouseenter",function(){
    businessIcon.style.opacity = 0.6;
    businessH.style.display= "block";

});
box6.addEventListener("mouseleave",function(){
    businessIcon.style.opacity =1;
    businessH.style.display= "none";

});

box7.addEventListener("mouseenter",function(){
    fancyIcon.style.opacity = 0.6;
    fancyH.style.display= "block";

});
box7.addEventListener("mouseleave",function(){
    fancyIcon.style.opacity =1;
    fancyH.style.display= "none";

});



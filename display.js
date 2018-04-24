var helpBut = document.getElementById("helpBut"),
    helpDiv= document.getElementById("helpDiv"),
    closeBut = document.getElementById("CloseBut");

helpBut.addEventListener("click",function(){
        helpDiv.style.display = "block";
})

function closeDiv(){
    helpDiv.style.display = "none";
}

closeBut.addEventListener("click",function(){
    closeDiv();
})


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
            
            CurrWeather.push("sunny");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
           document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage; 
            console.log(CurrWeather);
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
            
            CurrWeather.push("cloudy");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            
            document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage;
            console.log(CurrWeather);
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
            
            CurrWeather.push("rainy");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage;
            console.log(CurrWeather);
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
            
            CurrWeather.push("snowy");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            document.getElementById("dressingpage").style.backgroundImage = secondpage.style.backgroundImage;
            console.log(CurrWeather);
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
            
            CurrStyle.push("casual");
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            dressingpage.style.display="block";
            dressingpage.style.animation = "fadein 1.5s";
            console.log(CurrStyle);
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
            
            CurrStyle.push("business");
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            document.getElementById("dressingpage").style.display="block";
            document.getElementById("dressingpage").style.animation = "fadein 1.5s";
            console.log(CurrStyle);
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
            
            CurrStyle.push("fancy") ;
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            document.getElementById("dressingpage").style.display="block";
            document.getElementById("dressingpage").style.animation = "fadein 1.5s";
            console.log(CurrStyle);
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

var dress = document.getElementById("dress"),
    changeLeft = document.getElementById("changeLeft"),
    changeRight = document.getElementById("changeRight");

function StyleMi() {
   
    for (i = 0; i <gender.length; i++){
    if (gender[i] == "femaleGen"){
        
       if(CurrWeather[i]== "sunny"){
           
           if(CurrStyle[i] == "casual"){
                   
                   //this is the default background image chosen by the user
                   dress.style.backgroundImage= "url(SVG/outfits/female/scg.svg)";
                   
                    // didnt use increment because were only using 2 images and just changing them
                        changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/scg2.svg)";});
                        changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/scg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gscU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gscD.svg)";
           }
           else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/sbg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sbg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gsbU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gsbD.svg)";
           }
           else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/sfg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sfg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gsfU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gsfD.svg)";
           }
    
       }
       else if(CurrWeather[i] == "cloudy"){
           
           if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/ccg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/ccg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/ccg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gccU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gccD.svg)";
               }
           else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/cbg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cbg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gcbU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gcbD.svg)";
               }
           else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/cfg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cfg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gcfU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gcfD.svg)";
               }
       }
       else if (CurrWeather[i]== "rainy"){
            
            if(CurrStyle[i] == "casual"){
                  dress.style.backgroundImage= "url(SVG/outfits/female/rcg.svg)";
                   
                  changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rcg2.svg)";});
                  changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rcg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/grcU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/grcD.svg)";
               }
            else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/rbg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rbg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/grbU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/grbD.svg)";
               }
            else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/rfg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rfg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/grfU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/grfD.svg)";
            }
           
       }
       else if(CurrWeather[i] == "snowy"){
           
           if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/sncg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sncg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sncg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gsncU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gsncD.svg)";
            }
           else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/snbg.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snbg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gsnbU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gsnbD.svg)";
           }
           else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/snfg.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snfg.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts1").style.backgroundImage = "url(SVG/facts/gsnfU.svg)";
                    document.getElementById("facts4").style.backgroundImage = "url(SVG/facts/gsnfD.svg)";
               }
       }

    } 
    else if ( gender [i] == "maleGen"){
        
        if(CurrWeather[i]== "sunny"){
            
            if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/scb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/scb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/scb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bscU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bscD.svg)";
            }
            else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/sbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sbb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bsbU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bsbD.svg)";
            }
            else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/sfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sfb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bsfU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bsfD.svg)";
               }
    
        }
        else if(CurrWeather[i] == "cloudy"){
            
            if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/ccb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/ccb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/ccb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bccU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bccD.svg)";
            }
            else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/cbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cbb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bcbU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bcbD.svg)";
            }
            else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/cfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cfb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bcfU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bcfD.svg)";
               }
            
       }
        else if (CurrWeather[i]== "rainy"){
               if(CurrStyle[i] == "casual"){
                  dress.style.backgroundImage= "url(SVG/outfits/male/rcb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rcb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rcb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/brcU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/brcD.svg)";    
               }
               else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/rbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rbb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/brbU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/brbD.svg)";
               }
               else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/rfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rfb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/brfU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/brfD.svg)";
               }
           
       }
        else if(CurrWeather[i] == "snowy"){
               if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/sncb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sncb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sncb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bsncU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bsncD.svg)";
               }
               else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/snbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snbb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bsnbU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bsnbD.svg)";
               }
               else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/snfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snfb.svg)";});
                   
                   //putting the facts in the placeholder
                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/bsnfU.svg)";
                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/bsnfD.svg)";
               }
           }
    }
}
}

var addCloset = document.getElementById("addCloset"),
    display = document.getElementById("closetSaved");

box = 0;
function saveClothes (){
    
    dressSaved = dress.style.backgroundImage;
//    console.log(dressSaved);
    box ++;
    var Cdiv = document.createElement("div");
      Cdiv.className="saved";
      Cdiv.id = box;
    newImage = document.createElement("div");
    newImage.className="imgsaved"
    newImage.style.backgroundImage = dressSaved;
//    Cdiv.appendChild(dressSaved);
  
    function CdivDel(id){
        document.getElementById(id).remove();
    }
    Cdiv.addEventListener("click", function(){
        CdivDel(Cdiv.id)
    })
    
    Cdiv.appendChild(newImage);
    display.appendChild(Cdiv);

}

addCloset.addEventListener("click",function(){
    saveClothes();

})
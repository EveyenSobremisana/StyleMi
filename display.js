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



//Weatherpage
        box1.addEventListener("click",function(){
            
            CurrWeather.push("sunny");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            dressingpage.style.backgroundImage = secondpage.style.backgroundImage; 
            
            console.log(CurrWeather);
        });
 
        box2.addEventListener("click",function(){
            
            CurrWeather.push("cloudy");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            
            dressingpage.style.backgroundImage = secondpage.style.backgroundImage;
            
            console.log(CurrWeather);
        });

        box3.addEventListener("click",function(){
            
            CurrWeather.push("rainy");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            dressingpage.style.backgroundImage = secondpage.style.backgroundImage;
        
            console.log(CurrWeather);
        });
       
        box4.addEventListener("click",function(){
            
            CurrWeather.push("snowy");
            
            weatherpage.style.display="none";
            weatherpage.style.animation = "fadeout 1.5s";
            stylepage.style.display="block";
            stylepage.style.animation = "fadein 1.5s";
            
            dressingpage.style.backgroundImage = secondpage.style.backgroundImage;
            
            console.log(CurrWeather);
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
 
        box6.addEventListener("click",function(){
            
            CurrStyle.push("business");
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            dressingpage.style.display="block";
            dressingpage.style.animation = "fadein 1.5s";
            console.log(CurrStyle);
            StyleMi();

        });

        box7.addEventListener("click",function(){
            
            CurrStyle.push("fancy") ;
            
            stylepage.style.display="none";
            stylepage.style.animation = "fadeout 1.5s";
            dressingpage.style.display="block";
            dressingpage.style.animation = "fadein 1.5s";
            console.log(CurrStyle);
            StyleMi();
        });

//facts
var factBut = document.getElementById("factInfo"),
    factDiv = document.getElementById("facts");

factBut.addEventListener("click",function(){
    factDiv.style.display = "block";
})

 

/****************FUNCTION*******************/

var dress = document.getElementById("dress"),
    changeLeft = document.getElementById("changeLeft"),
    changeRight = document.getElementById("changeRight"),
     finalpage = document.getElementById("finallookpage"),
    finaldress = document.getElementById("finaldress");

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
                   

           }
           else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/sbg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sbg.svg)";});

           }
           else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/sfg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sfg.svg)";});
                   

           }
    
       }
       else if(CurrWeather[i] == "cloudy"){
           
           if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/ccg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/ccg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/ccg.svg)";});

               }
           else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/cbg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cbg.svg)";});
                   

               }
           else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/cfg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/cfg.svg)";});
                   

               }
       }
       else if (CurrWeather[i]== "rainy"){
            
            if(CurrStyle[i] == "casual"){
                  dress.style.backgroundImage= "url(SVG/outfits/female/rcg.svg)";
                   
                  changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rcg2.svg)";});
                  changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rcg.svg)";});
                   

               }
            else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/rbg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rbg.svg)";});
                   

               }
            else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/rfg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/rfg.svg)";});

            }
           
       }
       else if(CurrWeather[i] == "snowy"){
           
           if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/sncg.svg)";
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sncg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/sncg.svg)";});

            }
           else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/snbg.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snbg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snbg.svg)";});
                   

           }
           else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/female/snfg.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snfg2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/female/snfg.svg)";});
                   

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
                   

            }
            else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/sbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sbb.svg)";});
                   

            }
            else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/sfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sfb.svg)";});
                   

               }
    
        }
        else if(CurrWeather[i] == "cloudy"){
            
            if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/ccb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/ccb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/ccb.svg)";});
                   

            }
            else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/cbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cbb.svg)";});
                   

            }
            else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/cfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/cfb.svg)";});
                   

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
//                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/brcU.svg)";
//                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/brcD.svg)";    
             }
               else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/rbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rbb.svg)";});
                   

               }
               else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/rfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/rfb.svg)";});
                   
                   //putting the facts in the placeholder
//                    document.getElementById("facts2").style.backgroundImage = "url(SVG/facts/brfU.svg)";
//                    document.getElementById("facts3").style.backgroundImage = "url(SVG/facts/brfD.svg)";
               }
           
       }
        else if(CurrWeather[i] == "snowy"){
               if(CurrStyle[i] == "casual"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/sncb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sncb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/sncb.svg)";});
                   

               }
               else if (CurrStyle[i] == "business"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/snbb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snbb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snbb.svg)";});
                   

               }
               else if (CurrStyle[i] == "fancy"){
                   dress.style.backgroundImage= "url(SVG/outfits/male/snfb.svg)";
                   
                   
                   changeRight.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snfb2.svg)";});
                   changeLeft.addEventListener("click",function(){
                                               dress.style.backgroundImage= "url(SVG/outfits/male/snfb.svg)";});
                   

               }
           }
    }
}
}

var addCloset = document.getElementById("addCloset"),
    display = document.getElementById("closetSaved"),
   

box = 0;
function saveClothes (){
    
    dressSaved = dress.style.backgroundImage;

    box ++;
    var Cdiv = document.createElement("div");
      Cdiv.className="saved";
      Cdiv.id = box;
    newImage = document.createElement("div");
    newImage.className="imgsaved";
    newImage.style.backgroundImage = dressSaved;
    newImage.id = box+"i";
    
    // i to make it different from the boxes

  
    function CdivDel(id){
        document.getElementById(id).remove();
    }
    
    Cdiv.addEventListener("click", function(){
		//document.getElementById("result").innerHTML = "You have chosen "+ parseInt(CurrWeather[i])+ " and "+parseInt(CurrStyle[i]);
        console.log("clicked", this.id);
        finalpage.style.backgroundImage = dressingpage.style.backgroundImage; 
        finaldress.style.backgroundImage = document.getElementById(this.id+"i").style.backgroundImage;
		
        
        
        //after you click Cdiv, you will redirected to the Final Look Page
            closetpage.style.display="none";
            closetpage.style.animation = "fadeout 1.5s";
            finalpage.style.display="block";
            finalpage.style.animation = "fadein 1.5s";
            
   })
    
    Cdiv.appendChild(newImage);
    display.appendChild(Cdiv);

}

addCloset.addEventListener("click",function(){
    saveClothes();

})


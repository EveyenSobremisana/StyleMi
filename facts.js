//facts
var factBut = document.getElementById("factInfo"),
    factDiv = document.getElementById("facts");

factBut.addEventListener("click",function(){
	sfx1.play();
	sfx1.volume = 0.5;
    factDiv.style.display = "block";
})

//Closing the facts div//
document.getElementById("closeFacts").addEventListener("click",function(){
    document.getElementById("facts").style.display = "none";
});

//loading the facts
  
var FactsArray= [];
var thekey = "Style";

$(document).ready(function(){
	$.getJSON("styleMi.json", function(factsa) {
		$("#factInfo").click(function(){
			
				if (gender[0] == "femaleGen"){
					if(CurrWeather[0]== "sunny"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SunnyCasualG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SunnyBusinessG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SunnyFancyG"){
									document.getElementById("factsin").innerHTML = "<h3>Dress:</h3> "+factsa[i].Dress+"<h3>Where to get</h3>"+factsa[i].WhereDress;
								}
							}
						}
					}else if(CurrWeather[0] == "cloudy"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "CloudyCasualG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "CloudyBusinessG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "CloudyFancyG"){
									document.getElementById("factsin").innerHTML = "<h3>Dress:</h3> "+factsa[i].Dress+"<h3>Where to get</h3>"+factsa[i].WhereDress;
								}
							}
						}
					}else if (CurrWeather[0]== "rainy"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "RainyCasualG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "RainyBusinessG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "RainyFancyG"){
									document.getElementById("factsin").innerHTML = "<h3>Dress:</h3> "+factsa[i].Dress+"<h3>Where to get</h3>"+factsa[i].WhereDress;
								}
							}
						}
					}else if(CurrWeather[0] == "snowy"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SnowyCasualG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SnowyBusinessG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SnowyFancyG"){
									document.getElementById("factsin").innerHTML = "<h3>Dress:</h3> "+factsa[i].Dress+"<h3>Where to get</h3>"+factsa[i].WhereDress;
								}
							}
						}
					}
				}else if ( gender [0] == "maleGen"){
	
					if(CurrWeather[0]== "sunny"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SunnyCasualB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SunnyBusinessB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SunnyFancyB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}
					}else if(CurrWeather[0] == "cloudy"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "CloudyCasualB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "CloudyBusinessG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "CloudyFancyB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}
					}else if (CurrWeather[0]== "rainy"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "RainyCasualB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "RainyBusinessB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "RainyFancyG"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}
					}else if(CurrWeather[0] == "snowy"){
						
						if(CurrStyle[0] == "casual"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SnowyCasualB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "business"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SnowyBusinessB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}else if (CurrStyle[0] == "fancy"){
							for ( var i = 0; i < factsa.length; i++){
								if (factsa[i].Style == "SnowyFancyB"){
									document.getElementById("factsin").innerHTML = "<h3>Top:</h3> "+factsa[i].Top+"<h3>Where to get:</h3>"+factsa[i].WhereTop+"<br/><br/><br/><h3>Bottom:</h3>" +factsa[i].Bottom+"<h3>Where to get:</h3>"+factsa[i].WhereBot;
								}
							}
						}
					}
				}
			$("#showFacts").hide();
		});
	});
});


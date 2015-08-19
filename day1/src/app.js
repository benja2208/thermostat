thermostat = new Thermostat();

temperatureColor = function(){
	if (thermostat.temperature < 18){
		temperature.style.color = "green"
	}
	else if (thermostat.temperature < 25) {
		temperature.style.color = "gold"
	}
	else {
		temperature.style.color = "red"
	}
};

$ (document).ready(function(){
  
  $("#temperature").show(function() {
    temperature.innerHTML = thermostat.showtemp();
    temperatureColor();
  });

  $("#increase").click(function(){
	  thermostat.increaseTemperature();
		temperature.innerHTML = thermostat.temperature;
		temperatureColor();
  })

  $('#increase').mouseenter(function(){
  	$(this).animate({
           height: '+=10px'
       }); 
  });

  $('#increase').mouseleave(function(){
  	$(this).animate({
           height: '-=10px'
       }); 
  });

  $("#decrease").click(function(){
	  thermostat.decreaseTemperature();
		temperature.innerHTML = thermostat.temperature;
		temperatureColor();
  })

  $("#reset").click(function(){
		thermostat.reset();
		temperature.innerHTML = thermostat.temperature;
		temperatureColor();
  })

  $("#power_saving_mode").change(function(){
		thermostat.switchPowerSavingMode();
  })

})






// var temperature = document.getElementById('temperature');
// temperature.innerHTML = thermostat.temperature;
// temperatureColor();


// var increase = document.getElementById('increase');
// increase.onclick = function(){
// 	thermostat.increaseTemperature();
// 	temperature.innerHTML = thermostat.temperature;
// 	temperatureColor();
// };

// var decrease = document.getElementById('decrease');
// decrease.onclick = function(){
// 	thermostat.decreaseTemperature();
// 	temperature.innerHTML = thermostat.temperature;
// 	temperatureColor();
// };

// var reset = document.getElementById('reset');
// reset.onclick = function() {
// 	thermostat.reset();
// 	temperature.innerHTML = thermostat.temperature;
// 	temperatureColor();
// };

// var power_saving_mode = document.getElementById('power_saving_mode');
// power_saving_mode.onchange = function(){
// 	thermostat.switchPowerSavingMode();
// };


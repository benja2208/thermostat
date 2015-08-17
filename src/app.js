thermostat = new Thermostat();

temperatureColor = function(){
	if (thermostat.temperature < 18){
		temperature.style.color = "green"
	}
	else if (thermostat.temperature < 25) {
		temperature.style.color = "orange"
	}
	else {
		temperature.style.color = "red"
	}
};


var temperature = document.getElementById('temperature');
temperature.innerHTML = thermostat.temperature;
temperatureColor();


var increase = document.getElementById('increase');
increase.onclick = function(){
	thermostat.increaseTemperature();
	temperature.innerHTML = thermostat.temperature;
	temperatureColor();
}

var decrease = document.getElementById('decrease');
decrease.onclick = function(){
	thermostat.decreaseTemperature();
	temperature.innerHTML = thermostat.temperature;
	temperatureColor();
}

var reset = document.getElementById('reset');
reset.onclick = function() {
	thermostat.reset();
	temperature.innerHTML = thermostat.temperature;
	temperatureColor();
}

var power_saving_mode = document.getElementById('power_saving_mode');
power_saving_mode.onchange = function(){
	thermostat.switchPowerSavingMode();
}


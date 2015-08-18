function Thermostat() {
	this.temperature = 20;
	this.minimumTemperature = 10;
	this.maximumTemperature = 25;
	this.powerSavingMode = true;
};


Thermostat.prototype.showtemp=function(){
	return this.temperature
};

Thermostat.prototype.increaseTemperature = function(number) {
	number = number || 1;
	this.temperature += number;
	if(this.temperature > this.maximumTemperature){
		throw new Error ("Temperature cannot go above maximum!");
	}
	return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function(number) {
	number = number || 1;
	this.temperature -= number;
	if (this.temperature < this.minimumTemperature){
		throw new Error("Temperature cannot go below minimum!");
	}
	return this.temperature;
};

Thermostat.prototype.switchPowerSavingMode = function() {

	if (this.powerSavingMode) {
		this.powerSavingMode = false;
		this.changeMaximumTemperature();
		return "Power Saving Mode Off";
	}
	else{ 
		this.powerSavingMode = true;
		this.changeMaximumTemperature();
		return "Power Saving Mode On";
	}

};

Thermostat.prototype.changeMaximumTemperature = function() {
	if(this.powerSavingMode){
		return this.maximumTemperature = 25;
	}
	else {
		return this.maximumTemperature = 32;
	}
};

Thermostat.prototype.reset = function() {
	this.temperature = 20;
};






// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
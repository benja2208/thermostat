function Thermostat() {
	this.temperature = 20;
	this.minimumTemperature = 10;
	this.maximumTemperature = 25;
	this.powerSavingMode = true;
};


Thermostat.prototype.showtemp=function(){
	return this.temperature
};

Thermostat.prototype.increaseTemperature = function() {
    if (this.temperature < this.maximumTemperature) {
        this.temperature ++;
      }
    return this.temperature;


};

Thermostat.prototype.decreaseTemperature = function() {
	  if (this.temperature > this.minimumTemperature) {
      this.temperature --;
    }
    return this.temperature;
};

Thermostat.prototype.switchPowerSavingMode = function() {

	if (this.powerSavingMode) {
		this.powerSavingMode = false;
		this.changeMaximumTemperature();
	}
	else{ 
		this.powerSavingMode = true;
		this.changeMaximumTemperature();
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
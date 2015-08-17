function Thermostat() {
	this.temperature = 20;
	this.minimumTemperature = 10;
	this.maximumTemperature = 25;
	this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function(number) {
	number = number || 1;
	this.temperature += number;
};

Thermostat.prototype.decreaseTemperature = function(number) {
	number = number || 1;
	this.temperature -= number;
	if (this.temperature < this.minimumTemperature){
		throw new Error("Temperature cannot go below minimum!");
	}
};

Thermostat.prototype.switchPowerSavingMode = function() {
	this.powerSavingMode = true? false : true;
};

Thermostat.prototype.changeMaximumTemperature = function() {
	return this.maximumTemperature = 25?  32 : 25;
}

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
function Thermostat() {
	this.temperature = 20;
	this.minimumtemperature =10;
}

Thermostat.prototype.increaseTemperature = function() {
	this.temperature += 1;
}

Thermostat.prototype.decreaseTemperature = function() {
	this.temperature -= 1;
	if (this.temperature < this.minimumtemperature){
		throw new Error("Temperature cannot go below minimum!");
	}
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
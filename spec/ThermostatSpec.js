describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a temperature of 20 at the start", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be able to increase temperature", function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should be able to increase temperature by a number", function(){
    thermostat.increaseTemperature(5);
    expect(thermostat.temperature).toEqual(25);
  })

  it("should be able to decrease temperature", function(){
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should be able to decrease temperature by a number", function(){
    thermostat.decreaseTemperature(5);
    expect(thermostat.temperature).toEqual(15);
  })

  it("should be able to increase after decrease", function(){
    thermostat.decreaseTemperature();
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it("should have a minimum temperature of 10", function(){
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it("should not go below the minimum temperature", function(){
    expect(function() {
      thermostat.decreaseTemperature(11);
      }).toThrowError("Temperature cannot go below minimum!");
  });

  it("should have power saving mode on by default", function(){
    expect(thermostat.powerSavingMode).toBe(true)
  })

  it("should be able to switch power saving mode", function(){
    thermostat.switchPowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(false);
  })

  it("should have a maximum temperature of 25 by default", function(){
    expect(thermostat.maximumTemperature).toEqual(25);
  })

  it("should be able to change the maximum temperature to 32", function(){
    thermostat.changeMaximumTemperature();
    expect(thermostat.maximumTemperature).toEqual(32);
  })

  // it("should have a maximum temperature of 32 if power saving mode is off", function(){
  //   thermostat.switchPowerSavingMode();
  //   expect(thermostat.maximumTemperature).toEqual(32);
  // })
});



  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
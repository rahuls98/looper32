//Create individual players
var hihat = new Tone.Player("../samples/hihat.wav").toMaster();
var snare = new Tone.Player("../samples/snare.wav").toMaster();
var kick = new Tone.Player("../samples/kick.wav").toMaster();

hihat.volume.value = 5;
snare.volume.value = 5;
kick.volume.value = 5;

//Called by loop.js
function triggerDrums(drumMatrix, time, col) {
    var column = drumMatrix.matrix[col];
    for (var i = 0; i < column.length; i++) {
      if (column[0] === 1) {
        hihat.start();
      }
      if (column[1] === 1) {
        snare.start();
      }
      if (column[2] === 1) {
        kick.start();
      }
    }
    drumMatrix.place = col;
}
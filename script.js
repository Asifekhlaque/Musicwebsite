var audioPlayer = document.getElementById("audioPlayer");
var audioPlayer2 = document.getElementById("audioPlayer2");
var audioPlayer3 = document.getElementById("audioPlayer3");
    var playButton = document.getElementById("playButton");
    var playButton2 = document.getElementById("playButton-2");
    var playButton3 = document.getElementById("playButton-3");
    playButton.addEventListener("click", function() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = "Pause";
      } else {
        audioPlayer.pause();
        playButton.innerHTML = "Play";
      }
    });
    playButton2.addEventListener("click", function() {
        if (audioPlayer2.paused) {
          audioPlayer2.play();
          playButton2.innerHTML = "Pause";
        } else {
          audioPlayer2.pause();
          playButton2.innerHTML = "Play";
        }
      });
      playButton3.addEventListener("click", function() {
        if (audioPlayer3.paused) {
          audioPlayer3.play();
          playButton3.innerHTML = "Pause";
        } else {
          audioPlayer3.pause();
          playButton3.innerHTML = "Play";
        }
      });
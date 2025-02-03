  // Get references to elements
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playPauseIcon = document.getElementById("playPauseIcon");
  const volumeControl = document.getElementById("volumeControl");
  const volumeLabel = document.getElementById("volumeLabel");

  // Play the audio when the page loads
  audioPlayer.play();

  // Toggle play/pause functionality
  playPauseBtn.addEventListener("click", function() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseIcon.classList.remove("bi-play-fill");
      playPauseIcon.classList.add("bi-pause-fill");  // Change to Pause icon
    } else {
      audioPlayer.pause();
      playPauseIcon.classList.remove("bi-pause-fill");
      playPauseIcon.classList.add("bi-play-fill");  // Change to Play icon
    }
  });

  // Adjust volume
  volumeControl.addEventListener("input", function() {
    const volume = volumeControl.value;
    audioPlayer.volume = volume;
    volumeLabel.textContent = `Volume: ${Math.round(volume * 100)}%`;
  });
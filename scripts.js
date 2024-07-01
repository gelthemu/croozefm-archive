// stream-live-radio
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("stream-player-audio");
  const playPauseBtn = document.getElementById("play-pause");
  const streamError = document.getElementById("stream-player-error");
  const playIconClass = "fa-circle-play";
  const pauseIconClass = "fa-circle-pause";

  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          streamError.style.display = "none";
          playPauseBtn.querySelector("i").classList.remove(playIconClass);
          playPauseBtn.querySelector("i").classList.add(pauseIconClass);
        })
        .catch((error) => {
          streamError.style.display = "flex";
        });
    } else {
      audio.pause();
      playPauseBtn.querySelector("i").classList.remove(pauseIconClass);
      playPauseBtn.querySelector("i").classList.add(playIconClass);
    }
  });
});

// showcard-bgImages
document.addEventListener("DOMContentLoaded", function () {
  const bgImages = {
    "morning-addiction": "assets/shows/morning-addiction.svg",
    "lifestyle-show": "assets/shows/lifestyle-show.svg",
    "evening-switch": "assets/shows/evening-switch.svg",
    "hits-selector": "assets/shows/hits-selector.svg",
    "urban-breakfast": "assets/shows/urban-breakfast.svg",
    "big-seat": "assets/shows/BIG-seat.svg",
  };

  for (const [className, imagePath] of Object.entries(bgImages)) {
    const showElement = document.querySelector(`.${className}`);
    if (showElement) {
      showElement.style.backgroundImage = `url(${imagePath})`;
    }
  }
});

// showcard-overlay shadow
document.addEventListener("DOMContentLoaded", function () {
  const showElements = document.querySelectorAll(".show");

  showElements.forEach(function (showElement) {
    const showWidth = showElement.offsetWidth;
    const showHeight = showElement.offsetHeight;

    const showOverlayElement = showElement.querySelector(".show-overlay");

    showOverlayElement.style.setProperty(
      "--border-thickness1",
      `${(4 * showWidth) / 5}px`
    );
    showOverlayElement.style.setProperty(
      "--border-thickness2",
      `${showHeight - 4}px`
    );
  });
});

// stream-live-radio
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("stream-player-audio");
  const playPauseBtn = document.getElementById("play-pause");
  const streamError = document.getElementById("stream-player-error");
  const playIconClass = "fa-circle-play";
  const pauseIconClass = "fa-circle-pause";

  playPauseBtn.addEventListener("click", function () {
    const currentStreamingShows = document.getElementById(
      "current-streaming-shows"
    );
    const currentShowElement = document.getElementById(
      "current-streaming-show"
    );

    function getUgandaTime() {
      const now = new Date();
      const ugandaTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Africa/Kampala" })
      );
      return ugandaTime;
    }

    function getCurrentShow() {
      const ugandaTime = getUgandaTime();
      const hours = ugandaTime.getHours();
      const minutes = ugandaTime.getMinutes();

      const showSchedule = [
        { name: "The Morning Addiction . . .", start: 5, end: 10 },
        { name: "The Coffee Break . . .", start: 10, end: 11 },
        { name: "The LifeStyle Show . . .", start: 11, end: 14 },
        { name: "The Most Wanted Hits . . .", start: 14, end: 16 },
        { name: "The African Countdown . . .", start: 16, end: 17 },
        { name: "The Evening Switch . . .", start: 17, end: 19 },
        { name: "The Hits Selector . . .", start: 20, end: 22 },
        { name: "Sports Bwino . . .", start: 22, end: 24 },
      ];

      for (let show of showSchedule) {
        const startTime = new Date(ugandaTime);
        startTime.setHours(show.start, 0, 0);

        const endTime = new Date(ugandaTime);
        endTime.setHours(show.end, 0, 0);

        if (show.end < show.start) {
          if (ugandaTime >= startTime || ugandaTime < endTime) {
            return show.name;
          }
        } else if (ugandaTime >= startTime && ugandaTime < endTime) {
          return show.name;
        }
      }

      return "Great Music. Great Friends . . .";
    }

    function updateCurrentShow() {
      const currentShow = getCurrentShow();
      currentShowElement.textContent = `${currentShow}`;
    }

    window.onload = updateCurrentShow;

    setInterval(updateCurrentShow, 2500);

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          streamError.style.display = "none";
          currentStreamingShows.style.display = "flex";
          playPauseBtn.querySelector("i").classList.remove(playIconClass);
          playPauseBtn.querySelector("i").classList.add(pauseIconClass);
        })
        .catch((error) => {
          streamError.style.display = "flex";
          currentStreamingShows.style.display = "none";
        });
    } else {
      audio.pause();
      streamError.style.display = "none";
          currentStreamingShows.style.display = "none";
      playPauseBtn.querySelector("i").classList.remove(pauseIconClass);
      playPauseBtn.querySelector("i").classList.add(playIconClass);
    }
  });
});

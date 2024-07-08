// stream-live-radio
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("stream-player-audio");
  const playPauseBtn = document.getElementById("play-pause");
  const streamError = document.getElementById("stream-player-error");
  const playIconClass = "fa-circle-play";
  const pauseIconClass = "fa-circle-pause";
  const audioSrc = "https://fmradiohub.in/play?url=http://mp.techsysug.com:21563/;stream";
  const currentStreamingShows = document.getElementById(
    "current-streaming-shows"
  );
  const currentShowElement = document.getElementById("current-streaming-show");
  let showInterval;

  function getUgandaTime() {
    const now = new Date();
    const ugandaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Africa/Kampala" })
    );
    return ugandaTime;
  }

  function getCurrentShow() {
    const ugandaTime = getUgandaTime();
    const day = ugandaTime.getDay();

    const regularSchedule = [
      { name: "The Morning Addiction . . .", start: 6, end: 10 },
      { name: "The Coffee Break . . .", start: 10, end: 11 },
      { name: "The LifeStyle . . .", start: 11, end: 14 },
      { name: "The Most Wanted Hits . . .", start: 14, end: 16 },
      { name: "The African Countdown . . .", start: 16, end: 17 },
      { name: "The Evening Switch . . .", start: 17, end: 19 },
      {
        name:
          day === 3
            ? "The Crooze Farmer . . ."
            : day === 4
            ? "The Crooze Doctor . . ."
            : "Great Music. Great Friends . . .",
        start: 19,
        end: 20,
      },
      { name: "The Hits Selector . . .", start: 20, end: 22 },
      { name: "Sports Bwino . . .", start: 22, end: 24 },
    ];

    const fridaySchedule = [
      { name: "#TGIF - The Morning Addiction . . .", start: 6, end: 10 },
      { name: "#TGIF - The LifeStyle . . .", start: 11, end: 14 },
      { name: "#TGIF - The Most Wanted Xtra . . .", start: 14, end: 17 },
      { name: "#TGIF - The Evening Switch . . .", start: 17, end: 20 },
      { name: "#TGIF - The Fat Friday Mix . . .", start: 20, end: 24 },
    ];

    const saturdaySchedule = [
      { name: "The Urban Breakfast . . .", start: 6, end: 9 },
      { name: "The BIG Seat . . .", start: 9, end: 11 },
      { name: "The Weekly Sports Roundup . . .", start: 12, end: 14 },
      { name: "The African Rhythms . . .", start: 17, end: 20 },
      { name: "Saturday Night Live . . .", start: 20, end: 24 },
    ];

    const sundaySchedule = [
      { name: "The Sunday Inspiration . . .", start: 6, end: 9 },
      { name: "Sunday Love . . .", start: 9, end: 12 },
      { name: "ENYANGYI . . .", start: 12, end: 14 },
      { name: "Sunday Blues . . .", start: 14, end: 16 },
      { name: "The Total Country Show . . .", start: 20, end: 24 },
    ];

    const showSchedule =
      day === 5
        ? fridaySchedule
        : day === 6
        ? saturdaySchedule
        : day === 0
        ? sundaySchedule
        : regularSchedule;

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

  function startShowInterval() {
    updateCurrentShow();
    showInterval = setInterval(updateCurrentShow, 2500);
  }

  audio.src = audioSrc;

  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          streamError.style.display = "none";
          currentStreamingShows.style.display = "flex";
          playPauseBtn.querySelector("i").classList.remove(playIconClass);
          playPauseBtn.querySelector("i").classList.add(pauseIconClass);
          startShowInterval();
        })
        .catch((error) => {
          streamError.style.display = "flex";
          currentStreamingShows.style.display = "none";
          console.log(
            `Something went wrong!!!\n(${error} . . .)\nRefresh your browser.`
          );
        });
    } else {
      audio.pause();
      streamError.style.display = "none";
      currentStreamingShows.style.display = "none";
      playPauseBtn.querySelector("i").classList.remove(pauseIconClass);
      playPauseBtn.querySelector("i").classList.add(playIconClass);
      clearInterval(showInterval);
    }
  });

  window.onload = startShowInterval;
});

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

// presenter-Images
document.addEventListener("DOMContentLoaded", function () {
  const presenterImages = {
    belgaMc: "assets/presenters/belga-mc.svg",
    inyaaClare: "assets/presenters/clare-inyaa.svg",
    babyDosh: "assets/presenters/baby-dosh.svg",
    derrick: "assets/presenters/derrick-ashiimwe.svg",
    abouChampion: "assets/presenters/abou-champion.svg",
    wesigeBanyagi: "assets/presenters/wesige-banyagi.svg",
    deejayStinger: "assets/presenters/deejay-stinger.svg",
    djAlberto: "assets/presenters/dj-alberto.svg",
    dithanUg: "assets/presenters/dithan-ug.svg",
    djBanx: "assets/presenters/dj-banx.svg",
    djEmma: "assets/presenters/dj-emma.svg",
    mcKacheche: "assets/presenters/mc-kacheche.svg",
    monique: "assets/presenters/monique-mbabazi.svg",
    natiJ: "assets/presenters/nati-j.svg",
    nkutaMichael: "assets/presenters/nkuta-michael.svg",
    ronaldRosh: "assets/presenters/ronald-rosh.svg",
    starcent: "assets/presenters/starcent.svg",
    steveBuk: "assets/presenters/steve-buk.svg",
    djModern: "assets/presenters/dj-modern.svg",
  };

  for (const [className, imagePath] of Object.entries(presenterImages)) {
    const showElement = document.querySelector(`.${className}`);
    if (showElement) {
      showElement.style.backgroundImage = `url(${imagePath})`;
    }
  }
});

// filter presenters
document.addEventListener("DOMContentLoaded", function () {
  const presentersBtn = document.getElementById("forPresenters");
  const djsBtn = document.getElementById("forDjs");
  const presenters = document.querySelectorAll(".presenter");
  const djs = document.querySelectorAll(".dj");

  presentersBtn.addEventListener("click", function () {
    presentersBtn.classList.add("active");
    djsBtn.classList.remove("active");
    presenters.forEach((presenter) => (presenter.style.display = "block"));
    djs.forEach((dj) => (dj.style.display = "block"));
  });

  djsBtn.addEventListener("click", function () {
    djsBtn.classList.add("active");
    presentersBtn.classList.remove("active");
    djs.forEach((dj) => (dj.style.display = "block"));
    presenters.forEach((presenter) => (presenter.style.display = "none"));
  });
});

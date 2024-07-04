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

// show_schedule_imgs
document.addEventListener("DOMContentLoaded", function () {
  const showScheduleImages = {
    "t-m-a": "assets/schedule/belga-monique-derrick.svg",
    "l-s-s": "assets/schedule/inyaa.svg",
    "t-m-w-h": "assets/schedule/inyaa-starcent.svg",
    "t-e-s": "assets/schedule/nkuta.svg",
    "t-h-s-r-s": "assets/schedule/b-dosh.svg",
    "s-b": "assets/schedule/bwino.svg",
    "cfm-s-l": "assets/schedule/inyaa-s.svg",
    "f-f-m": "assets/schedule/belga-emma.svg",
    "t-u-b": "assets/schedule/stinger-dosh.svg",
    "t-b-s": "assets/schedule/wesige.svg",
    "t-a-rhy": "assets/schedule/starcent.svg",
    "cfm-s-n-l": "assets/schedule/kacheche-emma.svg",
    "t-w-s-r-u": "assets/schedule/sports.svg",
    "t-t-c-s": "assets/schedule/country.svg",
    "cfm-s-b": "assets/schedule/classics.svg",
    enyangyi: "assets/schedule/enyangyi.svg",
  };

  for (const [className, imagePath] of Object.entries(showScheduleImages)) {
    const showElement = document.querySelector(`.${className}`);
    if (showElement) {
      showElement.style.backgroundImage = `url(${imagePath})`;
    }
  }
});

// filter show_schedule
document.addEventListener("DOMContentLoaded", () => {
  const dayTabs = document.querySelectorAll(".day-tab");
  const scheduledShows = document.querySelectorAll(".scheduled-show");

  dayTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelector(".day-tab.active").classList.remove("active");
      tab.classList.add("active");

      const day = tab.dataset.day;

      scheduledShows.forEach((show) => {
        if (day === "all-day" || show.classList.contains(day)) {
          show.classList.add("active");
        } else {
          show.classList.remove("active");
        }
      });
    });
  });

  document.querySelector('.day-tab[data-day="all-day"]').click();
});

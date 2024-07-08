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

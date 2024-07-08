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

// scrollToTopBtn
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollToTopIcon = '<i class="fa-solid fa-chevron-up"></i>';

window.onscroll = function () {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollToTopBtn.style.display = "block";
    scrollToTopBtn.innerHTML = scrollToTopIcon;
  } else {
    scrollToTopBtn.style.display = "none";
    scrollToTopBtn.innerHTML = "";
  }
};

scrollToTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

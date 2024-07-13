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

// navigation
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navbarMenu = document.getElementById("navbar-menu");
  const navbarPills = document.getElementById("navbar-pills");

  navbarMenu.addEventListener("click", function () {
    navbarPills.classList.toggle("show-nav");
  });

  document.addEventListener("click", function (e) {
    if (!navbarMenu.contains(e.target) && !navbarPills.contains(e.target)) {
      navbarPills.classList.remove("show-nav");
    }
  });

  navbarPills.addEventListener("click", function () {
    navbarPills.classList.remove("show-nav");
  });
});

// on-scroll
document.addEventListener("DOMContentLoaded", function () {
  const streamPlayer = document.getElementById("stream-player");
  const closeStreamPlayer = document.getElementById("close-stream-player");
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

  let streamPlayerClosed = false;
  const streamPlayerOffset = streamPlayer.offsetTop;

  window.addEventListener("scroll", function () {
    if (!streamPlayerClosed && window.scrollY >= streamPlayerOffset) {
      streamPlayer.classList.add("stream-player-fixed");
      closeStreamPlayer.style.display = "block";
    } else {
      streamPlayer.classList.remove("stream-player-fixed");
      closeStreamPlayer.style.display = "none";
    }
  });

  closeStreamPlayer.addEventListener("click", function () {
    streamPlayer.classList.remove("stream-player-fixed");
    closeStreamPlayer.style.display = "none";
    streamPlayerClosed = true;
  });

  window.onscroll = function () {
    if (
      document.body.scrollTop === 0 &&
      document.documentElement.scrollTop === 0
    ) {
      streamPlayerClosed = false;
    }
  };
});

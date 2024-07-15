// navigation
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const navbarMenu = document.getElementById("navbar-menu");
  const navbarPills = document.getElementById("navbar-pills");
  const navbarLinks = document.querySelectorAll(".nav-pill");

  function setHeroMarginTop() {
    const navbarHeight = navbar.offsetHeight;
    hero.style.marginTop = `${navbarHeight}px`;
  }

  setHeroMarginTop();

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

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  window.addEventListener("resize", setHeroMarginTop);
});

// on-scroll
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const streamPlayer = document.getElementById("stream-player");
  const closeStreamPlayer = document.getElementById("close-stream-player");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  let streamPlayerClosed = false;
  const navbarHeight = navbar.offsetHeight;
  const streamPlayerOffset = streamPlayer.offsetTop;

  window.addEventListener("scroll", function () {
    if (!streamPlayerClosed && window.scrollY >= streamPlayerOffset) {
      streamPlayer.style.top = `${navbarHeight}px`;
      streamPlayer.classList.add("stream-player-fixed");
      closeStreamPlayer.style.display = "block";
    } else {
      streamPlayer.style.top = `0`;
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

// update-status-download
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("update-status-download")
    .addEventListener("click", async () => {
      const zip = new JSZip();
      const imageUrls = [
        "https://i.ibb.co/PzQ0pTM/cfm-bwino-flyer.jpg",
        "https://pbs.twimg.com/media/GSRvFgCWYAA2gKm?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GSRvFgEXgAADYvh?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GSRvFjdXYAAWvLw?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GSRvFgEXgAEznmt?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GSRvK07aEAA-BOI?format=jpg&name=4096x4096",
      ];

      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const response = await fetch(url);
        const blob = await response.blob();
        zip.file(`kafulu_wa_bwino${i + 1}.jpg`, blob);
      }

      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, "kafulu_wa_bwino_season_ii.zip");
      });
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

// toggle show/hide buttons in project section
function showHide() {
  const buttons = document.querySelectorAll("[data-tab-id]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.tabId);

      tabContents.forEach((tabContent) => (tabContent.style.display = "none"));
      target.style.display = "block";
    });
  });
}
showHide();

// toggle show/hide button in archive section
function showBtn() {
  const showButton = document.querySelector("[data-show-btn]");
  const cards = document.querySelectorAll("#card");

  showButton.addEventListener("click", () => {
    cards.forEach((card) => {
      if (card.style.display == "block") {
        card.style.display = "none";

        showButton.innerHTML = "Show more";
      } else {
        card.style.display = "block";

        showButton.innerHTML = "Show less";
      }
    });
  });
}
showBtn();

// nav on scroll function
function onScroll() {
  const navEl = document.querySelector(".nav");
  let lastScrollTop;

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navEl.style.top = "-100px";
    } else {
      navEl.style.top = "0px";
    }
    lastScrollTop = scrollTop;
  });
}
onScroll();

//loader timeout
function preloader() {
  const loader = document.getElementById("loader");

  window.addEventListener("load", function () {
    setTimeout(() => {
      loader.style.display = "none";
    }, 0);
  });
}
preloader();

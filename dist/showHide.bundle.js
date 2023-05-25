/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main-page.js":
/*!**********************!*\
  !*** ./main-page.js ***!
  \**********************/
/***/ (() => {

eval("// toggle show/hide buttons in project section\r\nfunction showHide() {\r\n  const buttons = document.querySelectorAll(\"[data-tab-id]\");\r\n  const tabContents = document.querySelectorAll(\"[data-tab-content]\");\r\n\r\n  buttons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n      const target = document.querySelector(button.dataset.tabId);\r\n\r\n      tabContents.forEach((tabContent) => (tabContent.style.display = \"none\"));\r\n      target.style.display = \"block\";\r\n    });\r\n  });\r\n}\r\nshowHide();\r\n\r\n// toggle show/hide button in archive section\r\nfunction showBtn() {\r\n  const showButton = document.querySelector(\"[data-show-btn]\");\r\n  const cards = document.querySelectorAll(\"#card\");\r\n\r\n  showButton.addEventListener(\"click\", () => {\r\n    cards.forEach((card) => {\r\n      if (card.style.display == \"block\") {\r\n        card.style.display = \"none\";\r\n\r\n        showButton.innerHTML = \"Show more\";\r\n      } else {\r\n        card.style.display = \"block\";\r\n\r\n        showButton.innerHTML = \"Show less\";\r\n      }\r\n    });\r\n  });\r\n}\r\nshowBtn();\r\n\r\n// nav on scroll function\r\nfunction onScroll() {\r\n  const navEl = document.querySelector(\".nav\");\r\n  let lastScrollTop;\r\n\r\n  window.addEventListener(\"scroll\", () => {\r\n    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n\r\n    if (scrollTop > lastScrollTop) {\r\n      navEl.style.top = \"-100px\";\r\n    } else {\r\n      navEl.style.top = \"0px\";\r\n    }\r\n    lastScrollTop = scrollTop;\r\n  });\r\n}\r\nonScroll();\r\n\r\n//loader timeout\r\nfunction preloader() {\r\n  const loader = document.getElementById(\"loader\");\r\n\r\n  window.addEventListener(\"load\", function () {\r\n    setTimeout(() => {\r\n      loader.style.display = \"none\";\r\n    }, 0);\r\n  });\r\n}\r\npreloader();\r\n\r\n// media js\r\nfunction navBtnMobile() {\r\n  const navDropMenuBtn = document.querySelector(\".menu\");\r\n  const menuStyledSideBar = document.querySelector(\".menu-StyledSideBar\");\r\n\r\n  navDropMenuBtn.addEventListener(\"click\", () => {\r\n    if (menuStyledSideBar.style.display == \"flex\") {\r\n      menuStyledSideBar.style.display = \"none\";\r\n      // menuStyledSideBar.style.transform = \"translateX(-200vw)\";\r\n    } else {\r\n      console.log(\"worked1\");\r\n      menuStyledSideBar.style.display = \"flex\";\r\n      // menuStyledSideBar.style.transform = \"translateX(0vw)\";\r\n    }\r\n  });\r\n}\r\nnavBtnMobile();\r\n\n\n//# sourceURL=webpack:///./main-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main-page.js"]();
/******/ 	
/******/ })()
;
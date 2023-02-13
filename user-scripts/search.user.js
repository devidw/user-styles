// ==UserScript==
// @name         Focus search input on /
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Focus search input on /
// @author       devidw
// @match        https://*/*
// @updateURL    https://raw.githubusercontent.com/devidw/user-styles/master/user-scripts/search.user.js
// @downloadURL  https://raw.githubusercontent.com/devidw/user-styles/master/user-scripts/search.user.js
// ==/UserScript==

; (async function () {
  "use strict"

  document.addEventListener('keydown', function (event) {
    if (event.key === '/' && !(document.activeElement.tagName === 'INPUT')) {
      var searchInput = document.querySelector('input[type="search"], input[name*="search"], input[placeholder*="search"]');
      if (searchInput) {
        searchInput.focus();
        event.preventDefault();
      }
    }
  });
})()

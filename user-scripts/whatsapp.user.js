// ==UserScript==
// @name         WhatsApp Web - Disable enter=send
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Disable enter=send in WhatsApp web.
// @author       devidw
// @match        https://web.whatsapp.com/
// @updateURL    https://raw.githubusercontent.com/devidw/user-styles/master/user-scripts/whatsapp.user.js
// @downloadURL  https://raw.githubusercontent.com/devidw/user-styles/master/user-scripts/whatsapp.user.js
// ==/UserScript==

; (async function () {
  "use strict"

  let input

  while (!input) {
    input = document.querySelector("div[title='Type a message']")
    console.log("wa user script input", input)

    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  input.addEventListener("keydown", (event) => {
    console.log("wa user script keydown", event)
    // disable enter but allow shift+enter
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
    }
  })
})()

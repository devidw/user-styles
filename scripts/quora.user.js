// ==UserScript==
// @name         Quora answers only, no related
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Filter for answers by default, not related questions
// @author       devidw
// @match        https://www.quora.com/*
// @updateURL    https://raw.githubusercontent.com/devidw/user-styles/master/scripts/quora.user.js
// @downloadURL  https://raw.githubusercontent.com/devidw/user-styles/master/scripts/quora.user.js
// ==/UserScript==

; (async function () {
  "use strict"

  function getElementByXPath(xpath) {
    return document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue
  }

  // Get button with text containing "All related"
  const getButton = () => getElementByXPath(
    '//*[@id="mainContent"]/div[3]/div/div[1]/div/div/button'
  )

  let button
  let tries = 0

  while (!button && tries < 10) {
    await new Promise((resolve) => setTimeout(resolve, 100))
    button = getButton()
    tries++
  }

  button.click()

  const option = getElementByXPath(
    '//*[@id="mainContent"]/div[3]/div/div[1]/div/div[2]/div/div[1]/div/div/div[2]'
  )

  if (!option) return console.warn("Couldn't find option element")

  option.click()
})()

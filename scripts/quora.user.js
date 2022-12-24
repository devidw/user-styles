// ==UserScript==
// @name         Quora answers only, no related
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Filter for answers by default, not related questions
// @author       devidw
// @match        https://www.quora.com/*
// ==/UserScript==

; (function () {
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
  const button = getElementByXPath(
    '//*[@id="mainContent"]/div[3]/div/div[1]/div/div/button'
  )

  button.click()

  const option = getElementByXPath(
    '//*[@id="mainContent"]/div[3]/div/div[1]/div/div[2]/div/div[1]/div/div/div[2]'
  )

  option.click()
})()

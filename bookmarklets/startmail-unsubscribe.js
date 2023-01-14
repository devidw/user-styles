; (function () {
  const links = [
    ...document
      .querySelector(".message-body__content")
      .shadowRoot.querySelectorAll("a[href]"),
  ]
  if (!links.length) return
  const targets = links.filter((a) =>
    a.innerText.toLowerCase().includes("unsubscribe")
  )
  if (!targets.length) return
  const target = targets[0]
  window.open(target.href, "_blank").focus()
})()

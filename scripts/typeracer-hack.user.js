// could be further optimized by getting text and pasting before race starts and
// only pressing enter on start, but anyways the app blocks this


const input = document.querySelector(".txtInput")
if (!input) throw new Error("Could not find input to paste into")

function getText() {
  const container = document.querySelector(".inputPanel")
  if (!container) throw new Error("Could not find element to extract text from")
  return container.innerText
}

function enterText(text) {
  input.value = text
  input.dispatchEvent(new Event("keypress", { key: "13" }))
}

function handle() {
  const text = getText()
  enterText(text)
}

async function onStart(mutationList, observer) {
  for (const mutation of mutationList) {
    if (
      mutation.type === "attributes" &&
      mutation.attributeName === "disabled"
    ) {
      await new Promise(resolve => setTimeout(resolve, 10000))
      handle()
      observer.disconnect()
    }
  }
}

const observer = new MutationObserver(onStart)

observer.observe(input, { attributes: true })
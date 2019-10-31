const createElement = (marker, tag) => {
  let el = document.createElement(tag || 'div')
  el.setAttribute(marker, '')
  document.body.appendChild(el)
}

const removeElement = (marker) => {
  let el = document.querySelector(marker) || document.querySelector(`[${marker}]`)
  if (el)
    document.body.removeChild(el)
}

const timeout = (duration = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

export {createElement, removeElement, timeout}

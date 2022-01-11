const createCustomElement = (tag, content, attributes) => {
  const element = document.createElement(tag)
  element.innerHTML = content
  for (const name in attributes) {
    element.setAttribute(name, attributes[name])
  }
  return element
}

export default createCustomElement

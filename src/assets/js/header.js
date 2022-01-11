const stockHeader = () => {
  const header = document.createElement('header')
  const nav = document.createElement('nav')
  const p = document.createElement('p')

  p.innerHTML = `cortex19 <strong>${document.title}</strong>`

  nav.appendChild(p)
  header.appendChild(nav)
  const bodyReturn = document.body.appendChild(header)

  return bodyReturn
}

const appendHeader = () => {
  stockHeader()
}

export default appendHeader

import './assets/css/style.css'

const basicTemplatePage = () => {
  const header = document.createElement('header')
  const nav = document.createElement('nav')
  const p = document.createElement('p')
  const container = document.createElement('div')
  container.classList.add('container')
  const footer = document.createElement('footer')

  p.innerHTML = `cortex19 <strong>${document.title}</strong>`
  container.innerHTML = 'Just for template purposes'
  footer.innerHTML = "<div class='text'>&copy; 2022</div>"

  nav.appendChild(p)
  header.appendChild(nav)
  document.body.appendChild(header)
  document.body.appendChild(container)
  document.body.appendChild(footer)
}

const initialization = () => {
  basicTemplatePage()
}

initialization()

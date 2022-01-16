import './assets/css/style.css'
import appendHeader from './assets/js/header'
import appendFooter from './assets/js/footer'
import { asideDOM } from './assets/js/asideAllProjects'
import { mainDOM } from './assets/js/mainAllToDos'
import { createDefaultProjects } from './assets/js/asideAllProjects'

const toDoListDOM = () => {
  const container = document.createElement('div')
  container.classList.add('container')

  container.appendChild(asideDOM())
  container.appendChild(mainDOM())

  document.body.appendChild(container)
}

export const initialization = () => {
  document.body.innerHTML = ''
  appendHeader()
  toDoListDOM()
  appendFooter()
}

createDefaultProjects()
initialization()

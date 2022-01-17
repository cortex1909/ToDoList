import './assets/css/style.css'
import appendHeader from './assets/js/header'
import appendFooter from './assets/js/footer'
import { asideDOM } from './assets/js/asideAllProjects'
import { mainDOM } from './assets/js/mainAllToDos'
import { createDefaultProjects } from './assets/js/asideAllProjects'

const toDoListDOM = (projectID) => {
  const container = document.createElement('div')
  container.classList.add('container')

  container.appendChild(asideDOM(projectID))
  container.appendChild(mainDOM(projectID))

  document.body.appendChild(container)
}

export const initialization = (projectID) => {
  document.body.innerHTML = ''
  appendHeader()
  toDoListDOM(projectID)
  appendFooter()
}

createDefaultProjects()
initialization()

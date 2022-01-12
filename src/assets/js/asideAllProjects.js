import Project from './project'
import { openProject } from './mainAllToDos'
import { deleteProject } from './mainAllToDos'

export let ProjectList = []

const asideDOM = () => {
  createNewProject('Default Project')
  createNewProject('Made Project')

  const asideElement = document.createElement('aside')
  const headingElement = document.createElement('div')
  headingElement.classList.add('heading')
  headingElement.innerHTML = 'All available projects:'
  const projectListElement = document.createElement('div')
  projectListElement.classList.add('projectList')
  const listAllProjectUL = document.createElement('ul')

  asideElement.appendChild(headingElement)
  asideElement.appendChild(projectListElement)
  projectListElement.appendChild(listAllProjectUL)

  ProjectList.forEach((project) => {
    const listAllProjectsLI = document.createElement('li')
    const buttonLinkToProject = document.createElement('button')
    buttonLinkToProject.classList.add('project')
    buttonLinkToProject.innerHTML = `${project.name}`
    buttonLinkToProject.addEventListener('click', () => {
      openProject(project.projectID)
    })
    const buttonDeleteProject = document.createElement('button')
    buttonDeleteProject.classList.add('deleteBtn')
    buttonDeleteProject.innerHTML = '&#9746;'
    buttonDeleteProject.addEventListener('click', () => {
      deleteProject(project.projectID)
    })
    listAllProjectsLI.appendChild(buttonLinkToProject)
    listAllProjectsLI.appendChild(buttonDeleteProject)
    listAllProjectUL.appendChild(listAllProjectsLI)
    return listAllProjectUL
  })
  return asideElement
}

const createNewProject = (projectName) => {
  const NewProject = Project(projectName)
  NewProject.createNewTask('Default Task #1', '13.1.2022.', 'high')
  NewProject.createNewTask('Default Task #2', '13.2.2022.', 'med')
  NewProject.createNewTask('Default Task #3', '13.3.2022.', 'low')
  NewProject.createNewTask('Default Task #4', '13.4.2022.', 'no')
  ProjectList.push(NewProject)
}

export default asideDOM

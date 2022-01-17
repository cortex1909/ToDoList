import Project from './project'
import { mainDOM } from './mainAllToDos'
import { initialization } from '../../script'

export let ProjectList = []

export const createDefaultProjects = () => {
  createNewProject('Default Project', 'default_project')
}

export const asideDOM = () => {
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
      mainDOM(project.projectID)
    })
    const buttonDeleteProject = document.createElement('button')
    buttonDeleteProject.classList.add('deleteBtn')
    buttonDeleteProject.innerHTML = '&#9746;'
    if (project.projectID === 'default_project') {
      buttonDeleteProject.disabled = true
      buttonDeleteProject.style.color = 'gray'
      buttonDeleteProject.style.textShadow = '1px 1px 5px gray'
    }
    buttonDeleteProject.addEventListener('click', () => {
      ProjectList = ProjectList.filter(
        (item) => item.projectID != project.projectID
      )
      listAllProjectsLI.remove()
      initialization()
    })
    listAllProjectsLI.appendChild(buttonLinkToProject)
    listAllProjectsLI.appendChild(buttonDeleteProject)
    listAllProjectUL.appendChild(listAllProjectsLI)
    return listAllProjectUL
  })
  const createProjectBtn = document.createElement('button')
  createProjectBtn.classList.add('createProjectBtn')
  createProjectBtn.innerHTML = 'Create'
  createProjectBtn.addEventListener('click', () => {
    const projectName = prompt('Enter project name', 'Project name')
    const NewProject = Project(projectName)
    ProjectList.push(NewProject)
    const _projectID = NewProject.GetID()
    initialization(_projectID)
  })
  asideElement.appendChild(createProjectBtn)
  return asideElement
}

export const createNewProject = (projectName, ID) => {
  const NewProject = Project(projectName, ID)
  NewProject.createNewTask(
    `Project ID ${NewProject.projectID}`,
    '13.1.2022.',
    'high'
  )
  NewProject.createNewTask('Default Task #2', '13.2.2022.', 'med')
  NewProject.createNewTask('Default Task #3', '13.3.2022.', 'low')

  ProjectList.push(NewProject)
}

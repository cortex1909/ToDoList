import createCustomElement from './createCustomElement'

const asideDOM = () => {
  const asideElement = document.createElement('aside')
  const headingElement = createCustomElement('div', 'All available projects:', {
    class: 'heading',
  })
  const projectListElement = createCustomElement('div', '', {
    class: 'projectList',
    id: 'projectList',
  })
  const listAllProjectUL = createCustomElement('ul', '', {
    id: 'listAllProjects',
  })

  asideElement.appendChild(headingElement)
  asideElement.appendChild(projectListElement)
  projectListElement.appendChild(listAllProjectUL)
  listAllProjectUL.appendChild(appendProjects())

  return asideElement
}

const appendProjects = () => {
  const listAllProjectsLI = document.createElement('li')
  const aLinkToProject = createCustomElement('a', 'Name of Project', {
    href: '#linkToProject',
  })
  const buttonDeleteProject = createCustomElement('button', '&#9746;', {
    id: 'deleteProject',
    class: 'deleteBtn',
  })

  listAllProjectsLI.appendChild(aLinkToProject)
  listAllProjectsLI.appendChild(buttonDeleteProject)

  return listAllProjectsLI
}

export default asideDOM

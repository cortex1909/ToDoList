import { ProjectList } from './asideAllProjects'
import Project from './project'

const printHeadNames = () => {
  const tableHeadNames = [
    'Name of Task',
    'Due Date',
    'Check for Solved',
    'Delete Task',
  ]
  const theadElement = document.createElement('thead')
  const tableRowElement = document.createElement('tr')
  let tableHead
  tableHeadNames.forEach((element) => {
    tableHead = document.createElement('th')
    tableHead.innerHTML = element
    tableRowElement.appendChild(tableHead)
    return tableRowElement
  })
  theadElement.appendChild(tableRowElement)

  return theadElement
}

export const openProject = (projectID) => {
  const mainElement = document.createElement('main')
  const headingElement = document.createElement('div')
  headingElement.classList.add('heading')
  headingElement.innerHTML = 'All available projects:'
  const tableElement = document.createElement('table')
  tableElement.setAttribute('id', 'toDoTable')
  mainElement.appendChild(headingElement)
  mainElement.appendChild(tableElement)
  tableElement.appendChild(printHeadNames())
  if (projectID === 'default_project') {
    tableElement.appendChild(printBody())
    return mainElement
  } else {
    tableElement.appendChild(printBody())
    return mainElement
  }
}

//kreni odavde

export const deleteProject = (projectID) => {
  console.log(projectID)
}

const printBody = () => {
  const bodyContent = [
    'To Do Task',
    '25.12.2021.',
    '<button class="checkToDoBtn">&#9746;</button>',
    '<button class="deleteToDoBtn">&#9746;</button>',
  ]

  const tbodyElement = document.createElement('tbody')
  const tableRowElement = document.createElement('tr')
  let tableRow
  bodyContent.forEach((element) => {
    tableRow = document.createElement('td')
    tableRow.innerHTML = element
    tableRowElement.appendChild(tableRow)
    return tableRowElement
  })
  tbodyElement.appendChild(tableRowElement)

  return tbodyElement
}

const mainDOM = () => {
  const defaultID = 'default_project'
  return openProject(defaultID)
}

export default mainDOM

/*

    tableRow = document.createElement('td')
    tableRow.innerHTML = element
    tableRowElement.appendChild(tableRow)
    return tableRowElement

*/

/*

  const mainElement = document.createElement('main')
  const headingElement = document.createElement('div')
  headingElement.classList.add('heading')
  headingElement.innerHTML = 'All available projects:'
  const tableElement = document.createElement('table')
  tableElement.setAttribute('id', 'toDoTable')
  mainElement.appendChild(headingElement)
  mainElement.appendChild(tableElement)
  tableElement.appendChild(printHeadNames())
  tableElement.appendChild(printBody())

*/

/*

  ProjectList.forEach((object) => {
    if (object.projectID === projectID) {
      let allTasks = []
      allTasks = object.tasks
      console.log(object)
      // TU SAM STAO!
    }
  })

*/

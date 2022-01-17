import { initialization } from '../../script'
import { ProjectList } from './asideAllProjects'
import Project from './project'
const mainElement = document.createElement('main')

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

export const mainDOM = (projectID = 'default_project') => {
  const trueMark = `&#9745;`
  const falseMark = `&#9746;`

  mainElement.innerHTML = ''
  const headingElement = document.createElement('div')
  headingElement.classList.add('heading')
  headingElement.innerHTML = `All To-Do from project ${
    projectID === undefined ? '>>Click On Project<<' : projectID
  }`
  mainElement.appendChild(headingElement)
  const tableElement = document.createElement('table')
  tableElement.appendChild(printHeadNames())
  const tableBody = document.createElement('tbody')

  const displayProject = ProjectList.filter(
    (project) => project.projectID === projectID
  )
  let displayTasks
  displayProject.forEach((attribute) => (displayTasks = attribute.tasks))

  displayTasks.forEach((task) => {
    const tableRow = document.createElement('tr')
    const tableCellOne = document.createElement('td')
    tableCellOne.innerHTML = task.taskName
    const tableCellTwo = document.createElement('td')
    tableCellTwo.innerHTML = task.taskDate
    const tableCellThree = document.createElement('td')
    const isFinishedCheckBtn = document.createElement('button')
    if (task.isFinished) {
      isFinishedCheckBtn.classList.add('checkToDoBtn', 'checked')
      isFinishedCheckBtn.innerHTML = '&#9745;'
      tableCellThree.appendChild(isFinishedCheckBtn)
    } else {
      isFinishedCheckBtn.classList.add('checkToDoBtn')
      isFinishedCheckBtn.innerHTML = '&#9746;'
      tableCellThree.appendChild(isFinishedCheckBtn)
    }
    isFinishedCheckBtn.addEventListener('click', () => {
      if (task.isFinished) {
        task.isFinished = false
        isFinishedCheckBtn.innerHTML = '&#9746;'
        isFinishedCheckBtn.classList.remove('checked')
      } else if (!task.isFinished) {
        task.isFinished = true
        isFinishedCheckBtn.innerHTML = '&#9745;'
        isFinishedCheckBtn.classList.add('checked')
      }
    })
    const tableCellFour = document.createElement('td')
    const deleteToDoBtn = document.createElement('button')
    deleteToDoBtn.classList.add('deleteToDoBtn')
    deleteToDoBtn.innerHTML = '&#9746;'
    tableCellFour.appendChild(deleteToDoBtn)
    deleteToDoBtn.addEventListener('click', () => {
      displayTasks = displayTasks.filter((tasks) => tasks != task)
      tableRow.remove()
    })

    tableRow.append(tableCellOne)
    tableRow.append(tableCellTwo)
    tableRow.append(tableCellThree)
    tableRow.append(tableCellFour)
    tableBody.appendChild(tableRow)
    return tableBody
  })

  tableElement.appendChild(tableBody)
  mainElement.appendChild(tableElement)
  const createTaskBtn = document.createElement('button')
  createTaskBtn.classList.add('createTaskBtn')
  createTaskBtn.innerHTML = 'Create'
  mainElement.appendChild(createTaskBtn)
  return mainElement
}

import { initialization } from '../../script'
import { ProjectList } from './asideAllProjects'
import Project from './project'
import uniqid from 'uniqid'
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
      ProjectList.filter((project) => {
        if (project.projectID === projectID) {
          project.tasks = displayTasks
        }
      })
      tableRow.remove()
    })

    tableRow.append(tableCellOne)
    tableRow.append(tableCellTwo)
    tableRow.append(tableCellThree)
    tableRow.append(tableCellFour)
    if (task.priority === 'high') {
      tableRow.style.backgroundColor = '#f003'
    } else if (task.priority === 'med') {
      tableRow.style.backgroundColor = '#ffa5004f'
    } else if (task.priority === 'low') {
      tableRow.style.backgroundColor = '#ffff005e'
    }
    tableBody.appendChild(tableRow)
    return tableBody
  })

  tableElement.appendChild(tableBody)
  mainElement.appendChild(tableElement)
  const createTaskBtn = document.createElement('button')
  createTaskBtn.classList.add('createTaskBtn')
  createTaskBtn.innerHTML = 'Create'
  createTaskBtn.addEventListener('click', () => {
    const modalElement = document.createElement('div')
    modalElement.classList.add('modal')
    const modalBody = document.createElement('div')
    modalBody.classList.add('body')
    const h2Element = document.createElement('h2')
    h2Element.innerHTML = `Create New Task for "${projectID}"`
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('closeBtn')
    closeBtn.innerHTML = '&#9746;'
    modalBody.appendChild(h2Element)
    h2Element.appendChild(closeBtn)
    const formElement = document.createElement('form')

    const TaskNameInput = document.createElement('input')
    TaskNameInput.type = 'text'
    TaskNameInput.placeholder = 'Name of Task'

    const DueDateInput = document.createElement('input')
    DueDateInput.type = 'date'
    DueDateInput.placeholder = 'Due Date'

    formElement.appendChild(TaskNameInput)
    formElement.appendChild(DueDateInput)

    const radioChoice = document.createElement('div')
    radioChoice.classList.add('radioChoice')

    const lowPriority = document.createElement('input')
    lowPriority.type = 'radio'
    lowPriority.name = 'priorityCheck'
    lowPriority.value = 'low'
    const lowPriorityLabel = document.createElement('label')
    lowPriorityLabel.for = lowPriority
    lowPriorityLabel.innerHTML = 'Low Priority'
    radioChoice.appendChild(lowPriority)
    radioChoice.appendChild(lowPriorityLabel)

    const mediumPriority = document.createElement('input')
    mediumPriority.type = 'radio'
    mediumPriority.name = 'priorityCheck'
    mediumPriority.value = 'med'
    const mediumPriorityLabel = document.createElement('label')
    mediumPriorityLabel.for = mediumPriority
    mediumPriorityLabel.innerHTML = 'Medium Priority'
    radioChoice.appendChild(mediumPriority)
    radioChoice.appendChild(mediumPriorityLabel)

    const highPriority = document.createElement('input')
    highPriority.type = 'radio'
    highPriority.name = 'priorityCheck'
    highPriority.value = 'high'
    const highPriorityLabel = document.createElement('label')
    highPriorityLabel.for = highPriority
    highPriorityLabel.innerHTML = 'High Priority'
    radioChoice.appendChild(highPriority)
    radioChoice.appendChild(highPriorityLabel)
    formElement.appendChild(radioChoice)

    const createTask = document.createElement('button')
    createTask.classList.add('createTaskBtn')
    createTask.innerHTML = 'Create'
    modalBody.appendChild(formElement)
    modalBody.appendChild(createTask)
    modalElement.appendChild(modalBody)
    mainElement.appendChild(modalElement)

    closeBtn.addEventListener('click', () => {
      modalElement.style.display = 'none'
    })
    createTask.addEventListener('click', () => {
      const radioCheck = document.querySelector(
        'input[name="priorityCheck"]:checked'
      )
      const array = {
        projectID: projectID,
        taskID: uniqid(),
        taskName: TaskNameInput.value,
        taskDate: DueDateInput.value,
        priority: radioCheck.value,
        isFinished: false,
      }
      displayTasks.push(array)
      initialization(projectID)
    })
  })
  mainElement.appendChild(createTaskBtn)
  return mainElement
}
//taskName, taskDate, priroity

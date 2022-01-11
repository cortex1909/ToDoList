import createCustomElement from './createCustomElement'

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
  const mainElement = document.createElement('main')
  const headingElement = createCustomElement(
    'div',
    'All To Do from ${project.name...}:',
    {
      class: 'heading',
    }
  )
  const tableElement = createCustomElement('table', '', { id: 'toDoTable' })
  mainElement.appendChild(headingElement)
  mainElement.appendChild(tableElement)
  tableElement.appendChild(printHeadNames())
  tableElement.appendChild(printBody())

  return mainElement
}

export default mainDOM

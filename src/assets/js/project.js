import uniqid from 'uniqid'
const Project = (name) => {
  const projectID = uniqid()
  let tasks = []

  const createNewTask = (taskName, taskDate, priority) => {
    const ID = `${projectID}-${uniqid()}`
    const isFinished = false
    const pushObject = {
      taskID: ID,
      taskName: taskName,
      taskDate: taskDate,
      isFinished: isFinished,
      priority: priority,
    }
    tasks.push(pushObject)
  }

  const getTasks = () => {
    return tasks
  }

  return { name, tasks, projectID, createNewTask, getTasks }
}

export default Project

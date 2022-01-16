import uniqid from 'uniqid'
const Project = (name, default_id) => {
  let projectID
  if (default_id) {
    projectID = default_id
  } else {
    projectID = uniqid()
  }
  let tasks = []

  const createNewTask = (taskName, taskDate, priority) => {
    const ID = uniqid()
    const isFinished = false
    const pushObject = {
      projectID: projectID,
      taskID: ID,
      taskName: taskName,
      taskDate: taskDate,
      isFinished: isFinished,
      priority: priority,
    }
    tasks.push(pushObject)
  }

  return { name, tasks, projectID, createNewTask }
}

export default Project

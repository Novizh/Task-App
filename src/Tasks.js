import React from 'react'

const Tasks = ({tasks, deleteTask}) => {
    const taskList = tasks.length ? (
        tasks.map(task => {
            return (
                <div className="collection-item" key={task.id}>
                    <span onClick={() => {deleteTask(task.id)}}>{task.title}</span>
                </div>
            )
        })
    ) : (
        <p className="center">Yay, you have no tasks!</p>
    )
    return (
        <div className="tasks collection">
            {taskList}
        </div>
    )
}

export default Tasks;
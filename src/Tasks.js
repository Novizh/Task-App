import React from 'react'

const Tasks = ({tasks}) => {
    const taskList = tasks.length ? (
        tasks.map(task => {
            <div className="collection-item" key={task.id}>
                <span>{task.title}</span>
            </div>
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
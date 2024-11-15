function Project(name, id){
    
    const tasks = new Map();

    const getId = () => id;

    const getTasks = () => Array.from(tasks.values());

    const addTask = (task) => tasks.set(task.getId(), task);

    const removeTask = (taskId) => tasks.delete(taskId);

    const getTask = (taskId) => tasks.get(taskId);

    return{
        name,
        getId,
        getTasks,
        addTask,
        removeTask,
        getTask
    }
}

export{
    Project
}



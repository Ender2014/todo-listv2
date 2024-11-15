import { isWithinInterval, addDays, startOfToday } from 'date-fns';

function ProjectManager(){
    let idCounter = 0;
    let activeProjectId = null;
    const projects = new Map();

    // Project related methodss
    const getAllProjects = () => Array.from(projects.values());

    const addProject = (project) => {
        projects.set(project.getId(), project);
        return project;
    };

    const getProject = (id) => projects.get(id);

    const getTaskAcrossProjects = (taskId) => {
        for (const project of projects.values()) {
            const task = project.getTask(taskId);
            if (task) {
                return task;
            }
        }
        return null; 
    };

    const removeProject = (id) => projects.delete(id);

    const getActiveProject = () => projects.get(activeProjectId);

    const switchActiveProject = (id) => activeProjectId = id;

    // Task-related methods
    const getAllTasks = () => {
        const tasks = [];
        for (const project of projects.values()) {
            tasks.push(...project.getTasks().values());
        }
        return tasks;
    };

    const getTasksDueWithinDays = (days) => {
        const tasks = getAllTasks();
        const today = startOfToday();
        const nextDays = addDays(today, days);
        const tasksDueNextDays = tasks.filter(task =>
            isWithinInterval(new Date(task.dueDate), {
              start: today,
              end: nextDays,
            })
          );
        return tasksDueNextDays;
    }

    const getCompletedTasks = () => {
        const tasks = getAllTasks();
        const completedTasks = tasks.filter((task) => {
            return task.getIsComplete();
        });

        return completedTasks;
    }
    
    return{
        getAllProjects,
        getProject,
        addProject,
        removeProject,
        getAllTasks,
        getTasksDueWithinDays,
        getCompletedTasks,
        getActiveProject,
        switchActiveProject,
        getTaskAcrossProjects
    }
}

//helper functions


export{
    ProjectManager,
}
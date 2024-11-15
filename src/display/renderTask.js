import { EventEmitter } from "../events/eventEmitter";
import projectImg from "../images/folder-outline.svg"

function TaskRenderer(container){
    
    const getContainer = () => container;

    const renderTask = (task) => {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("task");

        const taskLeftDiv = document.createElement("div");
        taskLeftDiv.classList.add("task-left");
    
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.id = `task${task.getId()}`;
        input.checked = task.getIsComplete();
        taskLeftDiv.appendChild(input);
    
        const label = document.createElement("label");
        label.classList.add("task-title");
        label.setAttribute("for", input.id);
        label.textContent = task.title;
        taskLeftDiv.appendChild(label);
    
        const taskRightDiv = document.createElement("div");
        taskRightDiv.classList.add("task-right");
    
        ["edit", "desc", "del"].forEach(action => {
            const button = document.createElement("button");
            button.classList.add(`${action}-btn`);
            button.type = "button";
    
            const img = document.createElement("img");
            img.src = projectImg;  
            img.alt = "account";
            button.appendChild(img);
    
            taskRightDiv.appendChild(button);
        });
    
        contentDiv.appendChild(taskLeftDiv);
        contentDiv.appendChild(taskRightDiv);

        container.appendChild(contentDiv);
    }
    
    const removeTask = (taskId) => {
        const projectElement = container.querySelector(`#${taskId}`);
        if (projectElement) {
          this.container.removeChild(projectElement);
        }
    }

    const clearTasks = () => container.textContent ="";


    const notifyPageLoad = (emitter) => {
        emitter.publish("pageDomLoad", null);
    }
    
    return{
        getContainer,
        renderTask,
        removeTask,
        clearTasks,
        notifyPageLoad
    }
}

export{
    TaskRenderer
}

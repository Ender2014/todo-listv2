import projectImg from "../images/folder-outline.svg"
import { EventEmitter } from "../events/eventEmitter";

function ProjectRenderer(container){

    const getContainer = () => container;

    const renderProject = (project) => {
        const projectLi = document.createElement("li");
    
        const projectBtn = document.createElement("button");
        projectBtn.setAttribute("type", "button");
        projectBtn.id = `project${project.getId()}`

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = `${project.name} (${project.getTasks().length})`;
        
        const img = document.createElement("img");
        img.src = projectImg;

        projectBtn.appendChild(img);
        projectBtn.appendChild(projectTitle);
        
        projectLi.appendChild(projectBtn);

        container.appendChild(projectLi);
    }
    
    const removeProject = (projectId) => {
        const projectElement = container.querySelector(`#${projectId}`);
        container.removeChild(projectElement);
    }

    const clearProject = () => container.textContent ="";

    const notifyProjectLoad = (emitter) => {
        emitter.publish("pageDomLoad", null);
    }
    
    return{
        getContainer,
        renderProject,
        removeProject,
        clearProject,
        notifyProjectLoad
    }

    
}

export{
    ProjectRenderer
}
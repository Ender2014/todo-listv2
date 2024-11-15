import projectImg from "../images/folder-outline.svg"
import { EventEmitter } from "../events/eventEmitter";

function ProjectRenderer(container, emitter){
 
    const getContainer = () => container;

    const getProject = (projectId) =>{
        return document.getElementById(`project${projectId}`);
    };

    const renderProject = (project) => {
        let projectDom = "";

        if( getProject(project.getId()) ){
            projectDom = getProject(project.getId());
            projectDom.querySelector("h3").textContent = `${project.name} (${project.getTasks().length})`;
        }else{
            const projectLi = document.createElement("li");
        
            projectDom = document.createElement("button");
            projectDom.setAttribute("type", "button");
            projectDom.id = `project${project.getId()}`

            const projectTitle = document.createElement("h3");
            projectTitle.textContent = `${project.name} (${project.getTasks().length})`;
            
            const img = document.createElement("img");
            img.src = projectImg;

            projectDom.appendChild(img);
            projectDom.appendChild(projectTitle);
            
            projectLi.appendChild(projectDom);

            container.appendChild(projectLi);
        }
        notifyProjectLoad(projectDom);
    }
    
    const removeProject = (projectId) => {
        container.removeChild(getProject(projectId));
    }

    const clearProject = () => container.textContent ="";

    const notifyProjectLoad = (data) => {
        emitter.publish("projectDomLoad", data);
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
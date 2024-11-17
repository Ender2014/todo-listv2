import "../resources/helper_js_files/domAssests.js";
import folderIcon from "../resources/images/folder-outline.svg";
import { initSideBarEventListeners } from "../events/handlers.js";
import { EventEmitter } from "../models/emitter"

// can be generalized into a renderer
export function UIrenderProjects(container, projects){
    container.textContent = "";
    projects.forEach(project => {
        const li = document.createElement("li");

        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.classList.add("project", "row-flex")
        button.id = project.getId();
        
        const img = document.createElement("img");
        img.src = folderIcon;
        
        const h3 = document.createElement("h3");
        h3.textContent = project.name;

        const span = document.createElement("span");
        span.textContent = `(${project.getTasks().length})`;

        button.appendChild(img);
        button.appendChild(h3);
        button.appendChild(span);

        li.appendChild(button);
        container.appendChild(li);
        EventEmitter.publish("DOMprojectload", project, button);
    });
}


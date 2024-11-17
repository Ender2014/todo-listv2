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

        // Create a namespace for SVG
        const SVG_NS = "http://www.w3.org/2000/svg";

        // Create the main <svg> element
        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("xmlns", SVG_NS);
        svg.setAttribute("viewBox", "0 0 24 24");

        // Create the <path> element
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("d", "M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z");

        // Append the <path> to the <svg>
        svg.appendChild(path);


        const h3 = document.createElement("h3");
        h3.textContent = project.name;

        const span = document.createElement("span");
        span.textContent = `(${project.getTasks().length})`;

        button.appendChild(svg);
        button.appendChild(h3);
        button.appendChild(span);

        li.appendChild(button);
        container.appendChild(li);
        EventEmitter.publish("DOMprojectload", project, button);
    });
}


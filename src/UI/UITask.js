import "../resources/helper_js_files/domAssests.js"
import folderIcon from "../resources/images/folder-outline.svg";
import { initDOMTasksEventListeners } from "../events/handlers.js";
import { EventEmitter } from "../models/emitter"

export const taskLoadEvent = new Event("DOMTaskLoaded");

export function UIrenderTitle(container, headertext){
    container.textContent = "";
    const h1 = document.createElement("h1");
    h1.classList.add("header");
    h1.textContent = headertext;
    container.appendChild(h1);
}

export function UIrenderTasks(container, tasks){
    container.textContent = "";

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.classList.add("task");
        div.id = task.getId();

        //left side
        const left = document.createElement("div");
        left.classList.add("row-flex");

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", `task${task.getId()}-checkbox`);
        input.classList.add("checkbox", "UIElement");
        input.id = `task${task.getId()}-checkbox`;
        input.checked = task.getIsComplete();
        
        const label = document.createElement("span");
        label.textContent = task.name;

        left.appendChild(input);
        left.appendChild(label);

        //right side
        const right = document.createElement("div");
        right.classList.add("row-flex");
        for(let i =0; i<2; i++){
            const button = document.createElement("button");
            button.setAttribute("type", "button");
            button.classList.add("utility", "UIElement", "row-flex")
            button.id = `task${task.getId()}-utility${i}`;

            const img = document.createElement("img");
            img.src = folderIcon;
            button.appendChild(img);
            
            right.appendChild(button);
        }
       
        div.appendChild(left);
        div.appendChild(right);

        container.appendChild(div);
        EventEmitter.publish("DOMtaskload", task);
    });
   
}

// helpers
//---------------------------------------------------------------//
export function UIdisplayPage(title, tasks){
    const contentDom = document.querySelector(".content");
    const titleDom = document.querySelector(".page-header");
    
    UIrenderTitle(titleDom, title);
    UIrenderTasks(contentDom, tasks);
};


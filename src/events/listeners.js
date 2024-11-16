import * as DOMHandler from "./handlers";
import { EventEmitter } from "./emitter";
import { getTaskById } from "../models/task";
import { UIdisplayPage } from "./handlers";
import { Navigator } from "../models/navigator";

// static elements
export function initOnloadEventlisteners(projectManager, taskManager){
    //onload
    document.addEventListener("DOMContentLoaded", () =>{
        DOMHandler.onload(projectManager, "Default Bitch");
        DOMHandler.initializeNavigatorPages(taskManager);
    });

    //add project popup
    document.querySelector(".addproject").addEventListener("click",() => {
        DOMHandler.openProjectPopup();
    });
    document.querySelector(".projectModal .close-btn").addEventListener("click", () => {
        DOMHandler.closeProjectPopup();
    });
    document.querySelector(".projectModal .add-btn").addEventListener("click", (e) => {
        e.preventDefault();
        DOMHandler.addProjectPopup(projectManager);
    });

    //add task popup
    document.querySelector(".addtask").addEventListener("click",  () => {
        DOMHandler.openTaskPopup();
    });
    document.querySelector(".taskModal .close-btn").addEventListener("click", () =>{
        DOMHandler.closeTaskPopup();
    });
    document.querySelector(".taskModal .add-btn").addEventListener("click",(e) => {
        e.preventDefault();
        DOMHandler.addTaskPopup(projectManager, taskManager);
    });

    //navigation
    document.querySelectorAll(".nav-list button").forEach(button => {
        button.addEventListener("click", (e) =>{
            DOMHandler.handleNavigatorDOMclick(e.currentTarget.id, taskManager);
        });
    });

    //subscribers
    //When page reloaded, reapply event listeners to tasks
    EventEmitter.subscribe('PageReload', (title, tasks) => initDOMTasksEventListeners(title, tasks));
}

//helper functions
export function initDOMProjectsEventlisteners(projectManager){
    document.querySelectorAll(".project").forEach(DOMProject => {
        DOMProject.addEventListener("click", () => {
            DOMHandler.handleProjectDOMClick(projectManager, +DOMProject.id);
        });
    });
}

// task listeners
export function initDOMTasksEventListeners(title, tasks){
    document.querySelectorAll(".task .checkbox").forEach(checkbox => {
        checkbox.addEventListener("click", (e) =>{
            const task = getTaskById(+e.target.parentElement.id, tasks)
            task.toggleComplete();

            // Future----Integrate project clicking into sidebar.
            if (Navigator.selectPage(title)){
                Navigator.runActivePage();
            }
            UIdisplayPage(title, tasks);
        });
    });
}



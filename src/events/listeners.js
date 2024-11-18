import * as DOMHandler from "./handlers";
import { EventEmitter } from "../models/emitter"

export function initOnloadEventlisteners(projectManager, taskManager){
    //onload
    document.addEventListener("DOMContentLoaded", ()=>{

        EventEmitter.subscribe("DOMprojectload", (project, button) => {
            DOMHandler.initSideBarEventListeners(project, button)
        });

        EventEmitter.subscribe("DOMtaskload", (task) => {
            DOMHandler.initDOMTasksEventListeners(task, taskManager, projectManager)
        });

        DOMHandler.initializeNavigatorPages(taskManager);
        DOMHandler.onload(projectManager, "My Tasks");
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

    // Add to each sidebar element when clicked, will set active the currently clicked navigator, and run it.
    document.querySelectorAll(".sidebar button").forEach(button => {
        button.addEventListener("click", (e) =>{
            DOMHandler.handleNavigatorDOMclick(e.currentTarget.id);
        });
    });
}



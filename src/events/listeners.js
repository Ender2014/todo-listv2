import * as DOMHandler from "./handlers";

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
            DOMHandler.handleNavigatorDOMclick(e.currentTarget.id);
        })
    });
}

// dynamic elements
// project listeners
export function initDOMProjectsEventlisteners(projectManager){
    document.querySelectorAll(".project").forEach(DOMProject => {
        DOMProject.addEventListener("click", () => {
            DOMHandler.handleProjectDOMClick(projectManager, +DOMProject.id);
        });
    });
}


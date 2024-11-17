import * as DOMHandler from "./handlers";

export function initOnloadEventlisteners(projectManager, taskManager){
    //onload
    document.addEventListener("DOMContentLoaded", () =>{
        DOMHandler.initializeNavigatorPages(taskManager);
        DOMHandler.onload(projectManager, "Default Bitch");
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
        //add again
        button.addEventListener("click", (e) =>{
            DOMHandler.handleNavigatorDOMclick(e.currentTarget.id);
        });
    });
}



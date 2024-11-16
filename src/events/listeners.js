import * as DOMHandler from "./handlers";
import { Navigator } from "../models/navigator";

// static elements
export function initOnloadEventlisteners(projectManager, taskManager){
    //onload
    document.addEventListener("DOMContentLoaded", () =>{
        DOMHandler.onload(projectManager, "Default Bitch");
        Navigator.init({
            "Today": () => {console.log("Today")},
            "Upcoming": () => {console.log("Upcoming")},
            "All": () => {console.log("All")},
            "Completed": () => {console.log("Completed")},
        });
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

}

// dynamic elements
// project listeners
export function initDOMProjectsEventlisteners(projectManager){
    document.querySelectorAll(".project").forEach(DOMProject => {
        console.log(`Added listener to ${DOMProject.textContent}.`)
        DOMProject.addEventListener("click", () => {
            DOMHandler.handleProjectDOMClick(projectManager, +DOMProject.id);
        });
    });
}


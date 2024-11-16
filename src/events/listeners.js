import { ProjectManager } from "../models/project";
import * as DOMHandler from "./handlers";

const projectManager = new ProjectManager();
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
document.querySelector(".taskModal .close-btn").addEventListener("click", (e) =>{
    e.preventDefault();
    DOMHandler.closeTaskPopup;
});
document.querySelector(".taskModal .add-btn").addEventListener("click",() => {
    DOMHandler.addTaskPopup(projectManager);
});



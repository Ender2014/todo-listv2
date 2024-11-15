import { Project } from "../models/project";
import { Task } from "../models/task";
import { renderProjectNav } from "../display/renderProjectjs";
import { ProjectManager } from "../models/projectManager";
import { EventEmitter } from "./eventEmitter";
import { TaskRenderer } from "../display/renderTask";


const modal = document.getElementById("taskModal");
const modal2 = document.getElementById("projectModal");
const form = document.querySelector("#taskModal form");  // Form element
const form2 = document.querySelector("#projectModal form");  // Form element
const addBtn = document.querySelector("#taskModal .add-btn"); // Add book modal button (not yet implemented)
const addBtn2 = document.querySelector("#projectModal .add-btn"); // Add book modal button (not yet implemented
const closeBtns = document.querySelectorAll(".close-btn"); // Close modal button 
const addTaskBtn = document.querySelector(".taskBtn");
const addProjectBtn = document.querySelector(".projectBtn");
const todayBtn = document.querySelector(".today");
const contentDom = document.querySelector(".content");
const upcomingBtn = document.querySelector(".upcoming");
const allTasksBtn = document.querySelector(".allTask");
const completedBtn = document.querySelector(".completed");

function extractNumbers(string){
    return +(string.replace(/[^0-9]/g, ''))
}

const projectMng = ProjectManager();
const emitter = EventEmitter()
const taskRenderer = TaskRenderer( document.querySelector(".content") );

let projectIdCounter = 100;
let taskIdCounter = 200;

//onLoad
document.addEventListener('DOMContentLoaded', () => {
    projectMng.addProject("Default");
    projectMng.switchActiveProject(0);
    renderProjectNav(projectMng, emitter);  
    taskRenderer.renderPage(projectMng.getActiveProject().name, projectMng.getActiveProject().getTasks(), emitter);
});

//taskBtn
addTaskBtn.addEventListener("click", () =>{
    modal.showModal();
});

//projectBtn
addProjectBtn.addEventListener("click", () =>{
    modal2.showModal();
});

//modalBtns
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
});

form2.addEventListener('submit', function(event) {
    event.preventDefault(); 
});

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        form.reset();
        modal.close();
        modal2.close();
    });
})

addBtn.addEventListener("click", () =>{
    const title = form.elements['title'].value; 
    const desc = form.elements['desc'].value;
    const dueDate = form.elements['dueDate'].value;
    const priority = form.elements['priority'].value;

    const activeProject = projectMng.getActiveProject();

    const task = Task(title,taskIdCounter++, desc, dueDate, priority);
    activeProject.addTask(task);

    renderProjectNav(projectMng, emitter); 
    taskRenderer.renderPage(projectMng.getActiveProject().name, projectMng.getActiveProject().getTasks(), emitter);
    modal.close();
});

addBtn2.addEventListener("click", () =>{
    const title = form2.elements['title'].value; 
    const project = Project(title, projectIdCounter++);
    projectMng.addProject(project);

    renderProjectNav(projectMng, emitter); 
    
    modal2.close();
});

// project-list entries
emitter.subscribe("projectDomChanged", () => {
    const projectsBtns = document.querySelectorAll(".project-list li button");
    projectsBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            projectMng.switchActiveProject(extractNumbers(btn.id));
            taskRenderer.renderPage(projectMng.getActiveProject().name, projectMng.getActiveProject().getTasks(), emitter);
        })
    });
});

emitter.subscribe("pageDomLoad", () => {
    const projectCheckBoxes = document.querySelectorAll(".task input[type ='checkbox']");
    projectCheckBoxes.forEach((checkbox) => {
        checkbox.addEventListener("click", () => {
            const task = projectMng.getTaskAcrossProjects(extractNumbers(checkbox.id));
            task.switchIsComplete();
            taskRenderer.renderPage(currentPage, pageConfigs[currentPage], emitter);

        })
    });

});

// Functional navs
todayBtn.addEventListener("click", () => {
    const todayTasks = projectMng.getTasksDueWithinDays(1);
    taskRenderer.renderPage("Today's Tasks", todayTasks, emitter);
});

upcomingBtn.addEventListener("click", () => {
    const upcomingTasks = projectMng.getTasksDueWithinDays(7);
    taskRenderer.renderPage("Upcoming Tasks", upcomingTasks, emitter);
});

allTasksBtn.addEventListener("click", () => {
    const allTasks = projectMng.getAllTasks();
    taskRenderer.renderPage("All Your Tasks", allTasks, emitter);
});

completedBtn.addEventListener("click", () => {
    const completedTasks = projectMng.getCompletedTasks();
    taskRenderer.renderPage("Completed Tasks", completedTasks, emitter);
});


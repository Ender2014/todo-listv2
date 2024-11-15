import { Project } from "../models/project";
import { Task } from "../models/task";
import { ProjectRenderer} from "../display/renderProject.js";
import { ProjectManager } from "../models/projectManager";
import { EventEmitter } from "./eventEmitter";
import { TaskRenderer } from "../display/renderTask";
import PageRenderer from "../display/renderPage.js";
import { Sidebar } from "../models/sidebar.js";

const modal = document.getElementById("taskModal");
const modal2 = document.getElementById("projectModal");
const form = document.querySelector("#taskModal form");  // Form element
const form2 = document.querySelector("#projectModal form");  // Form element

const addBtn = document.querySelector("#taskModal .add-btn"); 
const addBtn2 = document.querySelector("#projectModal .add-btn"); 
const closeBtns = document.querySelectorAll(".close-btn"); 
const contentDom = document.querySelector(".content");

const addTaskBtn = document.querySelector(".taskBtn");
const upcomingBtn = document.querySelector(".upcoming");
const allTasksBtn = document.querySelector(".allTask");
const completedBtn = document.querySelector(".completed");
const todayBtn = document.querySelector(".today");
const addProjectBtn = document.querySelector(".projectBtn");
const projectList = document.querySelector(".project-list");

function extractNumbers(string){
    return +(string.replace(/[^0-9]/g, ''));
}

function extractString(string){
    return string.replace(/[^a-zA-Z]/g, ''); 
}

function getInnerText(domElement){
    return extractString(domElement.innerText);
}

let projectIdCounter = 100;
let taskIdCounter = 200;


const emitter = EventEmitter()
const projectManager = ProjectManager();
const taskRenderer = TaskRenderer( contentDom, emitter);
const projectRenderer = ProjectRenderer(projectList, emitter);
const pageRenderer =  PageRenderer( contentDom, taskRenderer);

const sideBar = Sidebar({
    [addTaskBtn.innerText]: () =>{
        modal.showModal();
    },

    [todayBtn.innerText]: () =>{
        const todayTasks = projectManager.getTasksDueWithinDays(1);
        pageRenderer.renderPage(todayBtn.innerText, todayTasks);
    },

    [upcomingBtn.innerText]: () =>{
        const upcomingTasks = projectManager.getTasksDueWithinDays(7);
        pageRenderer.renderPage(upcomingBtn.innerText, upcomingTasks);
    },

    [allTasksBtn.innerText]: () =>{
        const allTasks = projectManager.getAllTasks();
        pageRenderer.renderPage(allTasksBtn.innerText, allTasks);
    },

    [completedBtn.innerText]: () => {
        const compTasks = projectManager.getCompletedTasks();
        pageRenderer.renderPage(completedBtn.innerText, compTasks);
    },
    [addProjectBtn.innerText]: () => {
        modal2.showModal();
    },
});

//onload
document.addEventListener('DOMContentLoaded', () => {
    const project = Project("My Tasks", projectIdCounter++);

    projectManager.addProject(project);

    projectRenderer.renderProject(project);

    projectManager.switchActiveProject(project.getId()); 
    const activeProject = projectManager.getActiveProject(); 
    console.log(activeProject)  

    pageRenderer.renderPage(activeProject.name, activeProject.getTasks());
});

//real time, when render page (page dom changed) is called, will also re apply event listeners.

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

    const activeProject = projectManager.getActiveProject(); 

    const task = Task(title, taskIdCounter++, desc, dueDate, priority);
    activeProject.addTask(task);

    pageRenderer.renderPage(activeProject.name, activeProject.getTasks());
    projectRenderer.renderProject(activeProject);
    
    modal.close();
});

addBtn2.addEventListener("click", () =>{
    const title = form2.elements['title'].value; 
    const project = Project(title, projectIdCounter++);
    projectManager.addProject(project);

    projectRenderer.renderProject(project);
    
    modal2.close();
});

//real time, when render project (project dom changed) is called, will also re apply event listeners.
emitter.subscribe("projectDomLoad", (data) => {
    console.log(sideBar.getSelections())
    //add to listeners to sidebar project entries
    sideBar.changeSelection(data.innerText, ()=>{

        projectManager.switchActiveProject(extractNumbers(data.id))
        const activeProject = projectManager.getActiveProject();
        pageRenderer.renderPage(activeProject.name, activeProject.getTasks());
    });

    //sidebar navigation
    document.querySelector('.sidebar').addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
    
        if (sideBar.getSelections()[buttonText]) {
            sideBar.setCurrSelection(buttonText);
            sideBar.runCurrSelection();
        }
    });
});
/*
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

});*/


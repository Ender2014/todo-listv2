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

const contentTasks = document.querySelector(".task-content");

function extractNumbers(string){
    return +(string.replace(/[^0-9]/g, ''))
}

let projectIdCounter = 100;
let taskIdCounter = 200;
let activeProject = "";

const emitter = EventEmitter()
const projectManager = ProjectManager();
const taskRenderer = TaskRenderer( contentTasks );
const projectRenderer = ProjectRenderer(projectList);
const pageRenderer =  PageRenderer( contentDom, taskRenderer);

const sideBar = Sidebar({
    [addTaskBtn.innerText]: () =>{
        modal.showModal();
    },

    [todayBtn.innerText]: () =>{
        const todayTasks = projectManager.getTasksDueWithinDays(1);
        pageRenderer.renderPage(activeProject.name, todayTasks);
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
    "project": () => {
        const tasks = activeProject.getAllTasks();
        pageRenderer.renderPage(activeProject.name, tasks);
    }
})

//onLoad
document.addEventListener('DOMContentLoaded', () => {
    const project = Project("My Tasks", projectIdCounter++);
    projectManager.addProject(project);
    projectManager.switchActiveProject(project.getId()); 
    activeProject = projectManager.getActiveProject();   

    sideBar.changeSelection(activeProject.name,  () => {
        pageRenderer.renderPage(activeProject.name, project.getTasks())
    });
    sideBar.setCurrSelection(activeProject.name);
    sideBar.runCurrSelection();
});

//sidebar buttons
document.querySelector('.sidebar').addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    if (sideBar.getSelections()[buttonText]) {
        sideBar.setCurrSelection(buttonText);
        sideBar.runCurrSelection();
    }
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





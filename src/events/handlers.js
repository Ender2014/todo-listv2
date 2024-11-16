import "../resources/helper_js_files/domAssests.js"
import { Project } from "../models/project.js";
import { Task } from "../models/task.js";
import { Navigator } from "../models/navigator.js";
import { UIrenderProjects } from "../UI/UIProject.js";
import { UIrenderTasks, UIrenderTitle } from "../UI/UITask.js";
import { initDOMProjectsEventlisteners } from "./listeners.js";
import { initDOMTasksEventListeners } from "./listeners.js";
import { EventEmitter } from "./emitter";

//Onload handlers
export function onload(projectManager, defualtProjectName){
    const project = new Project(defualtProjectName);
    projectManager.addProject(project);
    projectManager.switchActiveProject(project.getId());
    const projectList = document.querySelector(".project-list");
    const allProjects = projectManager.getAllProjects();
    UIrenderProjects(projectList, allProjects);
}

//Popup handlers
export function openTaskPopup(){
    const popup = document.querySelector(".taskModal");
    popup.showModal();
}

export function closeTaskPopup(){
    const popup = document.querySelector(".taskModal");
    const form = document.querySelector(".taskModal form");
    popup.close();
    form.reset();
}

export function addTaskPopup(projectManager, taskManager){
    const form = document.querySelector(".taskModal form");
    const title = form.elements['title'].value; 
    const desc = form.elements['desc'].value;
    const dueDate = form.elements['dueDate'].value;
    const priority = form.elements['priority'].value;

    const task = new Task(title, desc, dueDate, priority);
    taskManager.addTask(task);

    const projectList = document.querySelector(".project-list");
    const allProjects = projectManager.getAllProjects();

    UIrenderProjects(projectList, allProjects);
    closeTaskPopup();
}

export function openProjectPopup(){
    const popup = document.querySelector(".projectModal");
    popup.showModal();
}

export function closeProjectPopup(){
    const popup = document.querySelector(".projectModal");
    const form = document.querySelector(".projectModal form");
    popup.close();
    form.reset();
}

export function addProjectPopup(projectManager){
    const form = document.querySelector(".projectModal form");
    const title = form.elements['title'].value; 

    const project = new Project(title);
    projectManager.addProject(project);
    
    const projectList = document.querySelector(".project-list");
    const allProjects = projectManager.getAllProjects();

    UIrenderProjects(projectList,allProjects);
    closeProjectPopup();
}

// navigation section
export function initializeNavigatorPages(taskManager){
    const todayBtn = document.getElementById("today");
    const upcomingBtn = document.getElementById("upcoming");
    const allTasksBtn = document.getElementById("allTask");
    const completedBtn = document.getElementById("completed");
    const contentDom = document.querySelector(".content");

    Navigator.init({
        [todayBtn.id]: () => { UIdisplayPage(todayBtn.textContent, taskManager.getTasksDueWithinDays(1)) },
        [upcomingBtn.id]: () => { UIdisplayPage(upcomingBtn.textContent, taskManager.getTasksDueWithinDays(7)) },
        [allTasksBtn.id]: () => { UIdisplayPage(allTasksBtn.textContent, taskManager.getAllTasks()) },
        [completedBtn.id]: () => { UIdisplayPage(completedBtn.textContent, taskManager.getCompletedTasks()) },
    });
}

export function handleNavigatorDOMclick(page){
    
    Navigator.selectPage(page);
    Navigator.runActivePage();
}


// helper functions
export function UIdisplayPage(title, tasks){
    const contentDom = document.querySelector(".content");
    const titleDom = document.querySelector(".page-header");
    
    UIrenderTitle(titleDom, title);
    UIrenderTasks(contentDom, tasks);

    // Notify that page reloaded
    EventEmitter.publish("PageReload", title, tasks);
};


// project navigation section
/*export function handleProjectDOMClick(projectManager, projectId){
   
    projectManager.switchActiveProject(projectId);
    const project = projectManager.getActiveProject();

    UIdisplayPage(project.name, project.getTasks());
}*/
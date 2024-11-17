import "../resources/helper_js_files/domAssests.js"
import { Project,switchActiveProject } from "../models/project.js";
import { Task } from "../models/task.js";
import { Navigator } from "../models/navigator.js";
import { UIrenderProjects } from "../UI/UIProject.js";
import { UIdisplayPage } from "../UI/UITask.js";

//Onload handlers
//---------------------------------------------------------------//
export function onload(projectManager, defualtProjectName){
    const project = new Project(defualtProjectName);
    projectManager.addProject(project);
    switchActiveProject(project.getId());
    const projectList = document.querySelector(".project-list");
    const allProjects = projectManager.getAllProjects();
    UIrenderProjects(projectList, allProjects);
}

//Popup handlers
//---------------------------------------------------------------//
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

    Navigator.runActivePage();
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

// navigation handlers
//---------------------------------------------------------------//
export function initializeNavigatorPages(taskManager){
    const todayBtn = document.getElementById("today");
    const upcomingBtn = document.getElementById("upcoming");
    const allTasksBtn = document.getElementById("allTask");
    const completedBtn = document.getElementById("completed");
    const contentDom = document.querySelector(".content");
    // Add these pages with DOMid and their callbacks to the navigator
    Navigator.init({
        [todayBtn.id]: () => { UIdisplayPage(todayBtn.textContent, taskManager.getTasksDueWithinDays(1)) },
        [upcomingBtn.id]: () => { UIdisplayPage(upcomingBtn.textContent, taskManager.getTasksDueWithinDays(7)) },
        [allTasksBtn.id]: () => { UIdisplayPage(allTasksBtn.textContent, taskManager.getAllTasks()) },
        [completedBtn.id]: () => { UIdisplayPage(completedBtn.textContent, taskManager.getCompletedTasks()) },
    });
}
// Select the current page based on its id and run its callback function.
export function handleNavigatorDOMclick(DOMId){
    Navigator.selectPage(DOMId);
    Navigator.runActivePage();
}

// Adding eventlistener handlers
//---------------------------------------------------------------//
export function initDOMTasksEventListeners(task){
    document.querySelectorAll(".task .UIElement").forEach(DOMtask => {
        DOMtask.addEventListener("click", (e) =>{
            if(e.currentTarget.classList.contains("checkbox")){
                task.toggleComplete();
                console.log(task.getIsComplete())
                Navigator.runActivePage();
            }
            else if(e.currentTarget.classList.contains("utility")){
                console.log(e.currentTarget.id);
            }
        });
    });
}

// Initialize project event listeners
export function initSideBarEventListeners(project, button){
    //add project to sidebarconfig
    Navigator.addToPageConfigs(project.getId(), () => {
        switchActiveProject(project.getId());
        UIdisplayPage(project.name, project.getTasks());
    });
    
    button.addEventListener("click", (e) =>{
        handleNavigatorDOMclick(e.currentTarget.id)
    });   
}





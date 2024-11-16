import "../resources/helper_js_files/domAssests.js"
import { Project } from "../models/project.js";
import { Task } from "../models/task.js";
import { Navigator } from "../models/navigator.js";
import { UIrenderProjects } from "../UI/UIProject.js";
import { UIrenderTasks } from "../UI/UITask.js";
import { initDOMProjectsEventlisteners } from "./listeners.js";

//Onload handlers
export function onload(projectManager, defualtProjectName){
    const project = new Project(defualtProjectName);
    projectManager.addProject(project);
    projectManager.switchActiveProject(project.getId());
    const projectList = document.querySelector(".project-list");
    const allProjects = projectManager.getAllProjects();

    UIrenderProjects(projectList, allProjects);
    initDOMProjectsEventlisteners(projectManager);
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
    initDOMProjectsEventlisteners(projectManager);
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
    initDOMProjectsEventlisteners(projectManager);
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
        [todayBtn.id]: () => { UIrenderTasks(contentDom, taskManager.getTasksDueWithinDays(1)) },
        [upcomingBtn.id]: () => { UIrenderTasks(contentDom, taskManager.getTasksDueWithinDays(7)) },
        [allTasksBtn.id]: () => { UIrenderTasks(contentDom, taskManager.getAllTasks()) },
        [completedBtn.id]: () => { UIrenderTasks(contentDom, taskManager.getCompletedTasks()) },
    });
}

export function handleNavigatorDOMclick(page){
    Navigator.selectPage(page);
    Navigator.runActivePage();
}

export function handleProjectDOMClick(projectManager, projectId){
    const contentDom = document.querySelector(".content");

    projectManager.switchActiveProject(projectId);
    const project = projectManager.getActiveProject();

    UIrenderTasks(contentDom, project.getTasks());
}

//Load content section
export function loadContent(){
    
}

//
export function addDOMProject(){
    
}
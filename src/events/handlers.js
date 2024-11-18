import "../resources/helper_js_files/domAssests.js"
import { Project,switchActiveProject,getActiveProject} from "../models/project.js";
import { EventEmitter } from "../models/emitter.js";
import { Task } from "../models/task.js";
import { Navigator } from "../models/navigator.js";
import { UIrenderProjects } from "../UI/UIProject.js";
import { UIdisplayPage } from "../UI/UITask.js";

//Onload handlers
//---------------------------------------------------------------//
export function onload(projectManager,taskManager){
    if (storageAvailable("localStorage")) {
        console.log("localStorage API loaded.");
        
        const projects = fetchFromStorage("projects");
        const tasks = fetchFromStorage("tasks");

        if(projects.length === 0){
            const project = new Project("My Tasks");
            switchActiveProject(project.getId());
        }

        else{
            projects.forEach(project => {
                const projectSS =  Project.fromJSON(project);
                projectManager.addProject(projectSS);

                tasks.forEach((task) => {
                    const taskSS = Task.fromJSON(task);
                    if (taskSS.projectId === projectSS.getId()){
                        projectSS.addTask(taskSS );
                    }
                });

            });


        }

        EventEmitter.subscribe("DOMprojectload", (project, button) => {
            initSideBarEventListeners(project, button)
        });

        EventEmitter.subscribe("DOMtaskload", (task) => {
            initDOMTasksEventListeners(task, taskManager, projectManager)
        });

        initializeNavigatorPages(taskManager);

      } else {
        console.log("localStorage API loaded not found");
      }
    
    const projectList = document.querySelector(".project-list");
    const allProjects = projectManager.getAllProjects();
    UIrenderProjects(projectList, allProjects);
    populateStorage("projects", allProjects);
}

//Popup handlers
//---------------------------------------------------------------//
export function openTaskPopup(){
    const popup = document.querySelector(".taskModal");
    const modal = document.querySelector(".taskModal h2");
    modal.textContent = "Add Task";
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

    const task = new Task(title, desc, getActiveProject().getId(), dueDate, priority);
    taskManager.addTask(task);

    const projectList = document.querySelector(".project-list");
    const allProjects = projectManager.getAllProjects();

    const allTasks = taskManager.getAllTasks();

    Navigator.runActivePage();
    UIrenderProjects(projectList, allProjects);

    populateStorage("projects", allProjects);
    populateStorage("tasks",allTasks);

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
    populateStorage(allProjects);
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
// Storage events
//---------------------------------------------------------------//
export function populateStorage(name, item){
    if(item){
        localStorage.setItem(name, JSON.stringify(item));
        return;
    }
   console.log("Invalid item");
}

export function fetchFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

export function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
// Adding eventlistener handlers
//---------------------------------------------------------------//
export function initDOMTasksEventListeners(task, taskManager, projectManager){
    document.querySelectorAll(".task .UIElement").forEach(DOMtask => {
        DOMtask.addEventListener("click", (e) =>{
            if(e.currentTarget.id === `task${task.getId()}-checkbox`){
                task.toggleComplete();
                
            } else if (e.currentTarget.id === `task${task.getId()}-utility0`){
                
    
            } else if (e.currentTarget.id === `task${task.getId()}-utility1`){
                const allProjects = projectManager.getAllProjects();
                taskManager.removeTask(task.getId());
                UIrenderProjects(document.querySelector(".project-list"), allProjects );
            }
            Navigator.runActivePage();
            const allTasks = taskManager.getAllTasks();
            populateStorage("tasks",allTasks);
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





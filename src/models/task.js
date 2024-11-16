import { isBefore } from "date-fns";
import { isWithinInterval, addDays, startOfToday } from 'date-fns';
import { getActiveProject,switchActiveProject } from "./project";

export class Task {
   static idCounter = 0;

   constructor(name, desc, /*projectId*/ dueDate, priority) {
     this.name = name;
     this.id = ++Task.idCounter;
     //this.projectId = projectId;
     this.desc = desc;
     this.dueDate = dueDate ? new Date(dueDate) : null; // Validated due date
     this.priority = priority;
     this.isComplete = false; // Default to incomplete
   }
 
   // Getters
   getId() {
     return this.id;
   }

   getProjectId(){
      return this.projectId;
   }
   
   getIsComplete() {
     return this.isComplete;
   }
 
   // Methods
   toggleComplete() {
     this.isComplete = !this.isComplete;
     console.log(`Task ${this.id} marked ${this.isComplete}.`)
   }

   checkOverdue() {
      return isBefore(new Date(this.getDate()), new Date());
  }
 }

export class TaskManager {
   constructor(projectManager) {
     this.projectManager = projectManager; 
   }
 
   addTask(task) {
     const project = getActiveProject();
     if (project) {
       project.addTask(task);  
     } else {
       console.log(`Project with ID ${task.getProjectId()} not found.`);
     }
   }
 
   removeTask(taskId) {
     for (const project of this.projectManager.getAllProjects()) {
       const task = project.getTask(taskId);
       if (task) {
         project.removeTask(taskId);  // Delegate removing the task to the project
         return;
       }
     }
     console.log(`Task with ID ${taskId} not found.`);
   }
 
   getTask(taskId) {
     for (const project of this.projectManager.getAllProjects()) {
       const task = project.getTask(taskId);
       if (task) {
         return task;
       }
     }
     return null;
   }
 
   getAllTasks() {
     const tasks = [];
     for (const project of this.projectManager.getAllProjects()) {
       tasks.push(...project.getTasks());
     }
     return tasks;
   }
 
   getTasksByProject(projectId) {
     const project = this.projectManager.getProject(projectId);
     return project ? project.getTasks() : [];
   }
 
   getTasksDueWithinDays(days) {
     const tasks = this.getAllTasks();
     const today = startOfToday();
     const nextDays = addDays(today, days);
   
     return tasks.filter(task =>
       isWithinInterval(new Date(task.dueDate), {
         start: today,
         end: nextDays,
       })
     );
   }
 
   getCompletedTasks() {
     const tasks = this.getAllTasks();
     return tasks.filter(task => task.getIsComplete());
   }
 }
 
 
// helper function
export function getTaskById(taskId, tasks){
   for(const task of tasks){
      if (task.getId() === taskId){
         console.log(`Task ${taskId} found.`);
         return task;
      }
   }
   console.log(`Task ${taskId} does not exist.`);
}
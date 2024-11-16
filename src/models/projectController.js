import { isWithinInterval, addDays, startOfToday } from 'date-fns';

class ProjectController {
    constructor() {
      this.idCounter = 0;
      this.activeProjectId = null;
      this.projects = new Map();
    }
  
    // Project-related methods
    getAllProjects() {
      return Array.from(this.projects.values());
    }
  
    addProject(project) {
      this.projects.set(project.getId(), project);
      return project;
    }
  
    getProject(id) {
      return this.projects.get(id);
    }
  
    getTaskAcrossProjects(taskId) {
      for (const project of this.projects.values()) {
        const task = project.getTask(taskId);
        if (task) {
          return task;
        }
      }
      return null;
    }
  
    removeProject(id) {
      this.projects.delete(id);
    }
  
    getActiveProject() {
      return this.projects.get(this.activeProjectId);
    }
  
    switchActiveProject(id) {
      this.activeProjectId = id;
    }
  
    // Task-related methods
    getAllTasks() {
      const tasks = [];
      for (const project of this.projects.values()) {
        tasks.push(...project.getTasks());
      }
      return tasks;
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
  
  export { ProjectController };
  
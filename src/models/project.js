export class Project {
    static idCounter = 0;

    constructor(name) {
      this.name = name;
      this.id = ++Project.idCounter;
      this.tasks = new Map();
    }
  
    getId() {
      return this.id;
    }
  
    getTasks() {
      return Array.from(this.tasks.values());
    }
  
    addTask(task) {
      this.tasks.set(task.getId(), task);
    }
  
    removeTask(taskId) {
      this.tasks.delete(taskId);
    }
  
    getTask(taskId) {
      return this.tasks.get(taskId);
    }
  }

export class ProjectManager {
    constructor() {
        this.projects = new Map();
        this.activeProjectId = null;
    }

    addProject(project) {
        this.projects.set(project.getId(), project);
        return project;
    }

    removeProject(projectId) {
        this.projects.delete(projectId);
    }

    getAllProjects() {
        return Array.from(this.projects.values());
    }

    getProject(projectId) {
        return this.projects.get(projectId);
    }

    switchActiveProject(projectId) {
        if (this.projects.has(projectId)) {
        this.activeProjectId = projectId;
        }
    }

    getActiveProject() {
        return this.projects.get(this.activeProjectId);
    }
}


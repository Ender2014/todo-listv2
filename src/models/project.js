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
      console.log(typeof(tasks))
      this.tasks.set(task.getId(), task);
    }
  
    removeTask(taskId) {
      this.tasks.delete(taskId);
    }
  
    getTask(taskId) {
      return this.tasks.get(taskId);
    }

    static fromJSON(serializedJson) {
      const project = Object.assign(new Project(), serializedJson); // Assign properties to a new instance
      project.tasks = new Map(Object.entries(serializedJson.tasks)); // Convert plain object to Map
      return project;
  }
  }

export class ProjectManager {
    constructor() {
        this.projects = new Map();
        this.activeProjectId = null;
    }

    addProject(project) {
        if(project){
            this.projects.set(project.getId(), project);
            return project;
        }
        console.log(`Project ${project} cannot be added.`);
    }

    removeProject(projectId) {
        if(this.getProject(projectId)){
            this.projects.delete(projectId);
            return;
        }
        console.log(`Project with ID ${projectId} cannot be removed.`);
    }

    getAllProjects() {
        return Array.from(this.projects.values());
    }

    getProject(projectId) {
        const project = this.projects.get(projectId);
        if (project){
            return project;
        }
        console.log(`Project with ID ${projectId} not found.`);
    }
}

//helper functions
//Initial declaration, switch to a new one after changed user.
export const projectManager = new ProjectManager();

export function getActiveProject(){
    console.log(`Project with ID ${ projectManager.activeProjectId} is currently active.`);
    return projectManager.getProject(projectManager.activeProjectId); 
}

export function switchActiveProject(projectId){
    if ( projectManager.getProject(projectId)) {
        projectManager.activeProjectId = projectId;
    }
    console.log(`Project with ID ${ projectManager.activeProjectId} is now active.`);
}
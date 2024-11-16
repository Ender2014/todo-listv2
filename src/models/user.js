import { ProjectManager } from "./project";
import { TaskManager } from "./task";

export class User {
    #projects;
    #tasks;

    constructor(name) {
        this.name = name;
        this.projects = new ProjectManager();
        this.tasks = new TaskManager(projects);
    }

    setName(name) {
        this.name = name;
        return this.name;
    }

    getProjectManager() {
        return projects;
    }

    getTaskManager() {
        return tasks;
    }
}
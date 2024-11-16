class Project {
    constructor(name, id) {
      this.name = name;
      this.id = id;
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
  
  export { Project };
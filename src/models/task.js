
class Task {
   constructor(title, id, desc, dueDate, priority) {
     this.title = title;
     this.id = id;
     this.desc = desc;
     this.dueDate = dueDate ? new Date(dueDate) : null; // Validated due date
     this.priority = priority;
     this.isComplete = false; // Default to incomplete
   }
 
   // Getters
   getId() {
     return this.id;
   }
 
   getIsComplete() {
     return this.isComplete;
   }
 
   // Methods
   switchIsComplete() {
     this.isComplete = !this.isComplete;
   }
 }
 
 export { Task };
 

function Task(title, id, desc, dueDate, priority){
   const validDueDate = dueDate ? new Date(dueDate) : null;
   let isComplete = false;

   const taskId = id;

   const getId = () => id;

   const getIsComplete = () => isComplete;

   const switchIsComplete = () => isComplete ? isComplete = false : isComplete = true

   return{
      title,  
      desc, 
      dueDate: 
      validDueDate, 
      priority,
      getIsComplete,
      getId,
      switchIsComplete,
   }
}

export{
   Task
}
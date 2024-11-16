import "./styles.css";
import "./events/listeners.js"
import { initOnloadEventlisteners } from "./events/listeners.js";
import { ProjectManager, projectManager } from "./models/project.js";
import { TaskManager } from "./models/task.js";


const taskManager = new TaskManager(projectManager);

initOnloadEventlisteners(projectManager, taskManager);
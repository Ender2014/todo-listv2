import "./styles.css";
import "./events/listeners.js"
import { initOnloadEventlisteners } from "./events/listeners.js";
import { ProjectManager } from "./models/project.js";
import { TaskManager } from "./models/task.js";


const projectManager = new ProjectManager();
const taskManager = new TaskManager(projectManager);

initOnloadEventlisteners(projectManager, taskManager);
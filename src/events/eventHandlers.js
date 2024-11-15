import { Sidebar } from "../models/sidebar";

const modal = document.getElementById("taskModal");
const modal2 = document.getElementById("projectModal");
const form = document.querySelector("#taskModal form");  // Form element
const form2 = document.querySelector("#projectModal form");  // Form element
const addBtn = document.querySelector("#taskModal .add-btn"); // Add book modal button (not yet implemented)
const addBtn2 = document.querySelector("#projectModal .add-btn"); // Add book modal button (not yet implemented
const closeBtns = document.querySelectorAll(".close-btn"); // Close modal button 
const addTaskBtn = document.querySelector(".taskBtn");
const addProjectBtn = document.querySelector(".projectBtn");
const todayBtn = document.querySelector(".today");
const contentDom = document.querySelector(".content");
const upcomingBtn = document.querySelector(".upcoming");
const allTasksBtn = document.querySelector(".allTask");
const completedBtn = document.querySelector(".completed");

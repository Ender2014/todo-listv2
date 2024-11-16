import "../resources/helper_js_files/domAssests.js"

export function UIrenderTitle(container, headertext){
    container.textContent = "";
    const h1 = document.createElement("h1");
    h1.classList.add("header");
    h1.textContent = headertext;
    container.appendChild(h1);
}

export function UIrenderTasks(container, tasks){
    container.textContent = "";

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.classList.add("task");
        div.id = task.getId();

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", `task${task.getId()}-checkbox`);
        input.classList.add("checkbox");
        input.id = `task${task.getId()}-checkbox`;
        input.checked = task.getIsComplete();
        
        const label = document.createElement("label");
        label.setAttribute("for",`task${task.getId()}-checkbox`);
        label.textContent = task.name;
        
        div.appendChild(input);
        div.appendChild(label);

        container.appendChild(div);
    });
}
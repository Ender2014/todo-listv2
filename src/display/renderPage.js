export default function PageRenderer(container, TaskRenderer){
    
    const renderTitle = (title) => {
        const pageTitle = document.createElement("h1");
        pageTitle .textContent = title;
        container.appendChild(pageTitle);
    };

    const renderPage = (title, tasks) => {
        container.textContent = "";
        renderTitle(title);
        tasks.forEach((task) => {
            TaskRenderer.renderTask(task);
        });
    }

    return {    
        renderPage
    }
}
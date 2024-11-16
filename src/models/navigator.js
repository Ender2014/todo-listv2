export const Navigator = (function() {
    let activePage = null;

    let pageConfigs = {};

    const init = (configs) =>{
        pageConfigs = configs;
    }

    const addToPageConfigs = (name, callback) =>{
        pageConfigs[name] = () => callback();
    };

    const getActivePage = () => {
        if(pageConfigs[activePage]){
            console.log(`Current page is ${activePage}.`);
            return activePage;

        }
        console.log(`Page does not exist!`);
        
    };

    const selectPage = (page) =>{
        if(pageConfigs[page]){
            activePage = page;
            console.log(`Page ${page} is selected.`);
            return;
        }
        console.log(`Page ${page} does not exist!`);
    };


    const runActivePage = () => {
        if(pageConfigs[activePage]){
            console.log(`Page ${activePage} is running.`);
            pageConfigs[activePage]();
            return;
        }
        console.log(`Page ${activePage} cannot be run!`);
    };

    return{
        init,
        addToPageConfigs,
        getActivePage,
        selectPage,
        runActivePage
    }
}) ();
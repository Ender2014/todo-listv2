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
        }
        console.log(`Page does not exist!`);
    };


    const runActivePage = () => {
        if(pageConfigs[activePage]){
            pageConfigs[page]();
            console.log(`Page ${page} is running.`);
        }
        console.log(`Page does not exist!`);
    };

    return{
        init,
        addToPageConfigs,
        getActivePage,
        selectPage,
        runActivePage
    }
}) ();
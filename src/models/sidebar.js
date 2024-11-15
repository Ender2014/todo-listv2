function Sidebar(selections = {}){
    
    let currentSelection = "";

    const getSelections = () =>selections; 

    const getCurrSelection = () => currentSelection;

    const setCurrSelection = (newSelection) => currentSelection = newSelection;

    const changeSelection = (newSelection, callBack) => selections[newSelection] = callBack;

    const runCurrSelection = () => selections[currentSelection]();

    return{
        getSelections,
        getCurrSelection,
        setCurrSelection,
        changeSelection,
        runCurrSelection 
    }
}

export{
    Sidebar
}

function Sidebar(){
    const selections = { };

    let currentSelection = "";

    const getCurrSelection = () => currentSelection;

    const setCurrSelection = (newSelection) => currentSelection = newSelection;

    const addSelection = (newSelection, callBack) => selections[newSelection] = callBack;

    return{
        getCurrSelection,
        setCurrSelection,
        addSelection
    }
}

export{
    Sidebar
}

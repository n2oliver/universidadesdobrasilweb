function loadStates(){
    // Create item of list
    
    isBigScreen ? $(".state").remove() : $(".state-big").remove();
    $(".cardview-state").remove();

    for(let stateItem in states){
        createListItem(stateItem)
    }
}
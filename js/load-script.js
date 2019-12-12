function loadStates(){
    // Create item of list
    
    isBigScreen ? $(".state").remove() : $(".state-big").remove();
    $(".cardview-state").remove();

    for(stateItem in states){
        createListItem(stateItem)
    }
}
function loadStates(){
    // Create item of list
    
    isBigScreen ? $(".state").remove() : $(".state-big").remove();
    $(".cardview-state").remove();

    for(stateItem in states){
        obj = {
            "name": states[stateItem][state.name],
            "graduated_number": states[stateItem][state.graduated_number],
            "demography": states[stateItem][state.demography],
            "initials": states[stateItem][state.initials]
        }
        createListItem(obj)
    }
}
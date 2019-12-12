function createListItem(stateItem){
    // Create state layout
    stateItem = {
        "name": states[stateItem][state.name],
        "graduated_number": states[stateItem][state.graduated_number],
        "demography": states[stateItem][state.demography],
        "initials": states[stateItem][state.initials]
    }
    document.body.appendChild(
            withAStateDescription(
                withAnStateImage(
                    withARoundedClass(
                        withAStateClass(
                            document.createElement("div")
                        )
                ), stateItem)
            , stateItem)
        );
    
}
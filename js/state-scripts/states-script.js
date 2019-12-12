function createListItem(obj){
    // Create state layout
    let stateItem = {
        "name": states[obj][state.name],
        "graduated_number": states[obj][state.graduated_number],
        "demography": states[obj][state.demography],
        "initials": states[obj][state.initials]
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
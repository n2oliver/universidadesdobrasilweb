function createListItem(stateItem){
    // Create state layout
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
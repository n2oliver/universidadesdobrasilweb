function stateDescriptionLayout(stateItem){
    // Create image element
    let div = document.createElement("div")
    div.classList.add("state-title");
    div.appendChild(stateTitle(stateItem));
    div.appendChild(stateDetails(stateItem));
    return div;
}

function stateTitle(stateItem){
    // Create image element
    let title;
    if(isBigScreen){
        title = document.createElement("h2")
    } else {
        title = document.createElement("p")
    }
    title.textContent = stateItem.name;
    return title;
}

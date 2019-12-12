function withAStateClass(div){
    isBigScreen ? div.classList.add("state-big") : div.classList.add("state");
    return div;
}

function withARoundedClass(div){
    div.classList.add("rounded");
    return div;
}

function withAnStateImage(div, stateItem){
    // Append image to parent layout
    div.appendChild(stateImageLayout(stateItem));
    return div;
}

function withAStateDescription(div, stateItem){
    // Append image to parent layout
    div.appendChild(stateDescriptionLayout(stateItem));
    return div;
}
function stateImageLayout(stateItem){
    // Create image element
    img = document.createElement("img")
    img.classList.add("state-image");

    img.classList.add("rounded-circle");
    img.src = "docs/img/"+ stateItem.initials + ".png";
    return img;
}
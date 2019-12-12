let isBigScreen = window.innerWidth > 768, previousState = isBigScreen;

$(document).ready(function(){
    $(window).on("resize", function() {
        isBigScreen = window.innerWidth > 768
        if(previousState != isBigScreen){
            previousState = isBigScreen;
            loadStates()
        }
    })
});
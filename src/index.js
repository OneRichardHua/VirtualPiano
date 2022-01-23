


document.addEventListener("keypress", function(event) {
    if(event.code === "KeyA") {
        let audio = new Audio("../static/A.mp3")
        audio.play();
    }
    else if (event.code === "KeyS") {
        let audio = new Audio("../static/S.mp3");
        audio.play();
    }
    else if (event.code === "KeyD") {
        let audio = new Audio("../static/D.mp3");
        audio.play();
    }
    else if (event.code === "KeyF") {
        let audio = new Audio("../static/F.mp3");
        audio.play();
    }
    else if (event.code === "KeyG") {
        let audio = new Audio("../static/G.mp3");
        audio.play();
    }
    else if (event.code === "KeyH") {
        let audio = new Audio("../static/H.mp3");
        audio.play();
    }
    else if (event.code === "KeyJ") {
        let audio = new Audio("../static/J.mp3");
        audio.play();
    }
    // Black Keys
    else if (event.code === "KeyW") {
        let audio = new Audio("../static/W.mp3");
        audio.play();
    }
    else if (event.code === "KeyE") {
        let audio = new Audio("../static/E.mp3");
        audio.play();
    }
    else if (event.code === "KeyT") {
        let audio = new Audio("../static/T.mp3");
        audio.play();
    }
    else if (event.code === "KeyY") {
        let audio = new Audio("../static/Y.mp3");
        audio.play();
    }
    else if (event.code === "KeyU") {
        let audio = new Audio("../static/U.mp3");
        audio.play();
    }else {
        console.error("Unbound key was pressed");
    }
});
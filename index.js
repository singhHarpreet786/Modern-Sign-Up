const element = document.querySelector("lord-icon");

// the player is ready
element.addEventListener("ready", () => {
    element.playerInstance.play();
});

// the animation is complete
element.addEventListener("complete", () => {
    element.playerInstance.direction *= -1;
    element.playerInstance.play();
});
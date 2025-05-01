function showVideo() {
    var videoContainer = document.getElementById("videoContainer");
    var videoFrame = document.getElementById("videoFrame");

    videoContainer.style.display = "block";
    videoFrame.src += "&autoplay=1";

    // Prevent iframe interactions
    videoFrame.style.pointerEvents = "none";
}
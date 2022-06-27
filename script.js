// setup page on load
window.onload = function () {
    setViewport();
};

// maintain viewport height for soft keyboard on android
function setViewport () {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height = " + window.innerHeight);
}


var typed = new Typed(".multiple-text", {
    strings:[" BOOKS BUYING","BOOKS SELLING","BOOK EXCHANGE"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
document.getElementById("open-popup").onclick = function() {
    document.getElementById("popup").style.display = "block";
};
document.getElementById("open-popups").onclick = function() {
    document.getElementById("popup").style.display = "block";
};
document.getElementById("open-popupss").onclick = function() {
    document.getElementById("popup").style.display = "block";
};
document.getElementById("open-popupsss").onclick = function() {
    document.getElementById("popup").style.display = "block";
};
document.getElementById("open-popupssss").onclick = function() {
    document.getElementById("popup").style.display = "block";
};
document.getElementById("open-popupsssss").onclick = function() {
    document.getElementById("popup").style.display = "block";
};
document.getElementById("open-popupssssss").onclick = function() {
    document.getElementById("popup").style.display = "block";
};
document.getElementById("open-popupsssssss").onclick = function() {
    document.getElementById("popup").style.display = "block";
};



document.getElementById("close-popup").onclick = function() {
    document.getElementById("popup").style.display = "none";
};

// Close the popup if the user clicks anywhere outside of the popup content
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

  
// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modal-img");
var images = document.querySelectorAll('.zoomable');
var currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Navigation buttons
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
});

prev.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
});

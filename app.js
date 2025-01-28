/*setTimeout(function() {
    window.open("file:///C:/Users/Mr.Code/Desktop/articles%20website/boxs.html","_blank","width=500, height=400,left=300,top=10")
},3000)*/

window.onscroll = function() {
    if (window.scrollY >= 600 ){
        console.log(`Scrolling Y value Is ${window.scrollY}`)
    }
}
let fd = document.querySelector("ps")
window.onscroll = function() {
    if (window.scrollY >= 600 ){
        fd.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const lazyElements = document.querySelectorAll('.lazy-load');

    function checkVisibility() {
    lazyElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('visible');
        }
    });
    }

    // Check visibility on scroll and load
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    // Initial check in case content is already visible
    checkVisibility();
});
let fds = document.querySelector("#fds"); // Selects the element with ID 'fds'

window.onscroll = function() {
if (window.scrollY >= 1000) {
    fds.style.display = "block"; // Hide the element when scrolling past 600px
} else {
    fds.style.display = "none"; // Make sure it's visible again if scrolled back up
}
};
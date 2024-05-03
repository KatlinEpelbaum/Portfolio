const textAnimation = document.querySelector('.text-animation span');
const words = ['Software Developer'];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        textAnimation.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200); 
    } else {
        setTimeout(erase, 2000); 
    }
}

function erase() {
    if (charIndex > 0) {
        textAnimation.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); 
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); 
    }
}
type();


document.getElementById("navbar-toggle").addEventListener("click", function(event) {
    event.stopPropagation(); 
    document.querySelector(".navbar").classList.toggle("active");
  });
  
  document.querySelectorAll(".navbar a").forEach(function(link) {
    link.addEventListener("click", function() {
      document.querySelector(".navbar").classList.remove("active");
    });
  });
  
  document.body.addEventListener("click", function(event) {
    const navbar = document.querySelector(".navbar");
    if (!navbar.contains(event.target) && !event.target.matches("#navbar-toggle")) {
      navbar.classList.remove("active");
    }
  });




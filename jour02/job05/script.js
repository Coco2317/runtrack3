window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // couleur 
    const hue = 270; 
    const lightness = 90 - (scrollPercent * 0.6); 

    const footer = document.querySelector("footer");
    footer.style.backgroundColor = `hsl(${hue}, 60%, ${lightness}%)`;
});

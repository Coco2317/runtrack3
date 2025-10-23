const textarea = document.getElementById("keylogger");
console.log(textarea);
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // On vérifie si la touche est une lettre (a-z)
    if (key.length === 1 && key.match(/[a-z]/i)) {


            textarea.value += key;
        
    }
});

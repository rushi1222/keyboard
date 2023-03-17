
const random = document.querySelectorAll('.row .key:not(.utility)');

var jiggling = document.querySelector('.jiggle');

console.log(jiggling);

function assignClickListener(){
    jiggling.addEventListener('click', () => {
        jiggling.setAttribute('class', 'key');
    let randomIndex = Math.floor(Math.random() * random.length);
    let randomElement = random[randomIndex];
    randomElement.setAttribute('class', 'key jiggle');
    jiggling = document.querySelector('.jiggle');
    assignClickListener()
    console.log("clicked");
    
    
    });
}

document.addEventListener('DOMContentLoaded', assignClickListener);

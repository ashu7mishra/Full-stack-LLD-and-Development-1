const smileys = ['😢', '😟', '😐', '😊', '😃'];
const ratingSectionRef = document.getElementById('rating-section');
const smileyRef = document.querySelector('.smiley');
const resetRef = document.querySelector('.reset');

let hoveredValue = 0;
let selectedStarIndex = 0;

function createStars(){
    smileys.forEach((item, idx) => {
        const newStarElementRef = document.createElement('div');
        // newStarElementRef.classList.add('rating-box');
        // newStarElementRef.classList.add('empty-star');
        newStarElementRef.classList.add('rating-box','empty-star');
        // newStarElementRef.setAttribute('class', 'rating-box empty-star');
        newStarElementRef.setAttribute('data-id', idx+1);
        ratingSectionRef.appendChild(newStarElementRef);
    });
}

ratingSectionRef.addEventListener('mouseover', function(ev) {
    console.log(ev);
    if (ev.target.classList.contains('rating-box')) {
        const currentStarIndex = ev.target.dataset.id;
        console.log(currentStarIndex);
        hoveredValue = currentStarIndex;
        rerenderStars();
    }
    
});

ratingSectionRef.addEventListener('mouseleave', function(ev) {
    hoveredValue = 0;
    rerenderStars();
    
});

ratingSectionRef.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('rating-box')) {
        const currentStarIndex = ev.target.dataset.id;
        selectedStarIndex = currentStarIndex;
        rerenderStars();
        smileyRef.innerText = smileys[selectedStarIndex - 1];
    }
    
});

function rerenderStars() {
    const ratingBoxes = document.querySelectorAll('.rating-box');
    [...ratingBoxes].forEach((boxRef, idx) => {
        const highlightIndex = hoveredValue || selectedStarIndex;
        if (highlightIndex > idx) {
            boxRef.classList.add('fulled-star');
            boxRef.classList.remove('empty-star');
        } else{
            boxRef.classList.add('empty-star');
            boxRef.classList.remove('fulled-star');
        }
    });
    
}

resetRef.addEventListener('click', function(ev){
    hoveredValue = 0;
    selectedStarIndex = 0;
    smileyRef.innerText = '';
    rerenderStars();
})

createStars();

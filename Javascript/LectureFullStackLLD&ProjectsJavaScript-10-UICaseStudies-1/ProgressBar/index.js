const progressRef = document.querySelector('.progress');
const startRef = document.querySelector('.start');
const stopRef = document.querySelector('.stop');
const resetRef = document.querySelector('.reset');
// let intervalRef;
let animationFrameRef;

// function renderProgress() {
//     intervalRef = setInterval(() => {
//         let newValue = getProgressValue() + 1;
//         setProgressValue(newValue);
//         if (newValue >= 100){
//             clearInterval(intervalRef);
//         }
//     }, 1000);
// }

// function stopProgress(){
//     clearInterval(intervalRef);
// }

function renderProgress() {
    let newValue = getProgressValue() + 1;
    setProgressValue(newValue);
    if (newValue <= 100){
        animationFrameRef = requestAnimationFrame(renderProgress);
    }
}

function stopProgress(){
    cancelAnimationFrame(animationFrameRef);
}

function getProgressValue() {    
    return +progressRef.style.width.split('%')[0];
}

function setProgressValue(value) {
    progressRef.style.width = `${value}%`;
}

startRef.addEventListener('click', function(){
    renderProgress();
    startRef.setAttribute('disabled', true);
    stopRef.removeAttribute('disabled');

});

stopRef.addEventListener('click', function() {
    stopProgress();
    startRef.removeAttribute('disabled');
    stopRef.setAttribute('disabled', true);
});

resetRef.addEventListener('click', function(){
    stopProgress();
    progressRef.style.width = '0%';
    startRef.removeAttribute('disabled');
    stopRef.setAttribute('disabled', true);
});


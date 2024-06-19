const progressRef = document.querySelector('.progress');
const startRef = document.querySelector('.start');
const stopRef = document.querySelector('.stop');
const resetRef = document.querySelector('.reset');

function renderProgress() {
    const intervalRef = setInterval(() => {
        let newValue = getProgressValue() + 1;
        setProgressValue(newValue);
        if (newValue >= 100){
            clearInterval(intervalRef);
        }
    }, 1000);
}

function getProgressValue() {    
    return +progressRef.style.width.split('%')[0];
}

function setProgressValue(value) {
    progressRef.style.width = `${value}%`;
}

renderProgress();
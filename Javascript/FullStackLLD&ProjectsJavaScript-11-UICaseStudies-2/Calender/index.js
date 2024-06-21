const prevButtonRef = document.querySelector('.controls .prev');
const nextButtonRef = document.querySelector('.controls .next');
const monthSelectRef = document.querySelector('.controls .month');
const YearSelectRef = document.querySelector('.controls .year');
const datesRef = document.querySelector('.dates');
const todayButtonRef = document.querySelector('.today-section button');


const MONTHS = [
    'Jan',    
    'Feb',    
    'Mar',    
    'Apr',    
    'May',    
    'Jun',    
    'Jul',    
    'Aug',    
    'Sep',    
    'Oct',    
    'Nov',    
    'Dec'
];

const todayDate = new Date();

function generateMonthOptions(){
    MONTHS.forEach(month =>{
        const createOption = document.createElement('option');
        createOption.value = idx;
        createOption.innerText = month;
    })
}

function generateYearOptions(){

}

function generateDays(){

}
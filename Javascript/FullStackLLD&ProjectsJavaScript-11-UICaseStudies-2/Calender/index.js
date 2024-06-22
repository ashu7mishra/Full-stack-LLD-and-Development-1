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
    const monthFragment = document.createDocumentFragment();
    MONTHS.forEach((month, idx) =>{
        const createMonthOption = document.createElement('option');
        createMonthOption.value = idx;
        createMonthOption.innerText = month;
        createMonthOption.selected = todayDate.getMonth() === idx;
        monthFragment.appendChild(createMonthOption);
    })
    monthSelectRef.appendChild(monthFragment);
}

function generateYearOptions(){
    const currentYear = todayDate.getFullYear();
    const yearFragment = document.createDocumentFragment();
    for(let i = currentYear-100; i <= currentYear+100; i++){
        const createYearOption = document.createElement('option');
        createYearOption.value = i;
        createYearOption.innerText = i;
        createYearOption.selected = todayDate.getFullYear() === i;
        yearFragment.appendChild(createYearOption);
    }
    YearSelectRef.appendChild(yearFragment);

}

function generateDays(month, year){
    datesRef.innerHTML = '';
    const startDay = new Date(year, month,1).getDay();
    const totalDaysInMonth = new Date(year, month+1,0).getDate();
    const datesFragment = document.createDocumentFragment();

    for (let i=0; i<startDay; i++){
        const spanRef = document.createElement('span');
        datesFragment.appendChild(spanRef);
    }

    for (let j=1; j<=totalDaysInMonth; j++){
        const spanRef = document.createElement('span');
        spanRef.classList.add('date');
        spanRef.setAttribute('data-id', j);
        spanRef.innerText = j;
        datesFragment.appendChild(spanRef);
    }
    datesRef.appendChild(datesFragment);

}

generateMonthOptions();
generateYearOptions();
generateDays(6, 2024);

monthSelectRef.addEventListener('change', function(ev){
    const selectedMonth = ev.target.value;
    const selectedYear = YearSelectRef.value;
    generateDays(selectedMonth, selectedYear);
});

YearSelectRef.addEventListener('change', function(ev){
    const selectedYear = ev.target.value;
    const selectedMonth = monthSelectRef.value;
    generateDays(selectedMonth, selectedYear);
});

nextButtonRef.addEventListener('click', function(ev){
    let selectedYear = +YearSelectRef.value;
    let selectedMonth = +monthSelectRef.value;
    if (selectedMonth === 11){
        YearSelectRef.value = selectedYear + 1;
        monthSelectRef.value = 0;
    }else{
        monthSelectRef.value = selectedMonth + 1;
    }
    generateDays(monthSelectRef.value, YearSelectRef.value);
});

prevButtonRef.addEventListener('click', function(ev){
    let selectedYear = +YearSelectRef.value;
    let selectedMonth = +monthSelectRef.value;
    if (selectedMonth === 0){
        YearSelectRef.value = selectedYear - 1;
        monthSelectRef.value = 11;
    }else{
        monthSelectRef.value = selectedMonth - 1;
    }
    generateDays(monthSelectRef.value, YearSelectRef.value);
});

todayButtonRef.addEventListener('click', function(ev){
    YearSelectRef.value = todayDate.getFullYear();
    monthSelectRef.value = todayDate.getMonth();
    generateDays(monthSelectRef.value, YearSelectRef.value);
})

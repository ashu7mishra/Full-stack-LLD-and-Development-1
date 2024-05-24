const h1Title = document.getElementById('listSection');
h1Title.style.backgroundColor = 'aqua';

// h1Title.innerText = 'Book My Show';

const h3Element = document.createElement('h3');
h3Element.innerText = 'Ashutosh Mishra';

const headingSection = document.querySelector('.randomChild');
headingSection.appendChild(h3Element);

let darkmode = true;
function darkenBackground(){
    var bodyRef = document.querySelector('body');
    if (darkmode){
        bodyRef.style.backgroundColor = 'black';
        darkmode = false;
        
    }else{
        bodyRef.style.backgroundColor = 'white';
        darkmode = true;
    }
        
}

// darkenBackground()

// document.addEventListener(TYPE_OF_EVENT, CALLBACK)

//Show alert with "hi" message on click on window
// document.addEventListener('click', function(event){
//     alert('hi')
// });

const buttonRef = document.querySelector('.darkModeButton');

buttonRef.addEventListener('click', function(){
    darkenBackground();
    // alert('Dark Mode ON');
    
});

function changeFont(item){
    item.style.fontSize = '500px';  
}

fontFlag = true;
function changeFontSize(){
    var tagRef = document.getElementsByTagName('li');
    if (fontFlag){
        for (i=0; i<tagRef.length; i++){
            tagRef[i].style.fontSize = '10px'; 
        }
        fontFlag = false;

    }else{
        for (i=0; i<tagRef.length; i++){
            tagRef[i].style.fontSize = '15px'; 
        }
        fontFlag = true;
    }
    
      
}

const textConfsel = document.querySelector('.textConfig'); 

textConfsel.addEventListener('click', function(){
    changeFontSize();
    // alert('Dark Mode ON');
    
});
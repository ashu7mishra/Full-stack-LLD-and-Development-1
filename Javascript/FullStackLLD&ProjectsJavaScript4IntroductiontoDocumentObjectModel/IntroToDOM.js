const h1Title = document.getElementById('listSection');
h1Title.style.backgroundColor = 'aqua';

// h1Title.innerText = 'Book My Show';

const h3Element = document.createElement('h3');
h3Element.innerText = 'Ashutosh Mishra';

const headingSection = document.querySelector('.randomChild');
headingSection.appendChild(h3Element);

flag = true;
function darkenBackground(){
    var bodyRef = document.querySelector('body');
    if (flag){
        bodyRef.style.backgroundColor = 'black';
        flag = false;
        
    }else{
        bodyRef.style.backgroundColor = 'white';
        flag = true;
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

function changeFontSize(){
    var tagRef = document.getElementsByTagName('li');
    tagRef.forEach(changeFont);
      
}

const textConfsel = document.querySelector('.textConfig'); 

textConfsel.addEventListener('click', function(){
    changeFontSize();
    // alert('Dark Mode ON');
    
});

changeFontSize();
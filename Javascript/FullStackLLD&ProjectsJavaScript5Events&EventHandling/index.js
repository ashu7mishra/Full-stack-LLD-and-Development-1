// const usernameRef = document.querySelector('.form input.username');
// const passwordRef = document.querySelector('.form input.password')
// const obj = {};

// usernameRef.addEventListener('keyup', function(e){
//     console.log(e.target.value);
//     obj.username = e.target.value;
//     const previewRef = document.querySelector('.preview.username');
//     previewRef.innerText = e.target.value;
// });

// passwordRef.addEventListener('keyup', function(e){
//     console.log(e.target.value);
//     obj.password = e.target.value;
//     const previewRef = document.querySelector('.preview.password');
//     previewRef.innerText = e.target.value;
// });

// const buttonRef = document.querySelector('.form button');
// buttonRef.addEventListener('click', function(e){
//     console.log(obj);
// });

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', function(e){
    e.preventDefault();
    for (i=0; i<formRef.elements.length; i++){
        console.log(formRef.elements[i].name, formRef.elements[i].value);
    }
    const result = [...formRef.elements].reduce(function(acc, item){
        acc[item.name] = item.value;
        return acc;
    },{})
    console.log(result);
});

const usernameRef = document.querySelector("input.username");
usernameRef.addEventListener("keyup", function(e){
    e.preventDefault();
    if (e.key === "Shift"){
        console.log("Shift Pressed")
    }
})





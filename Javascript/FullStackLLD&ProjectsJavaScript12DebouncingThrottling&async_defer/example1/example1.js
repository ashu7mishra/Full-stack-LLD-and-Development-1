var bodyRef = document.querySelector('body');
var spanRef = document.createElement('span');
spanRef.innerText = 'Script1 Location';
bodyRef.appendChild(spanRef);

for(var i=0; i<100000; i++){
    console.log(i);
}
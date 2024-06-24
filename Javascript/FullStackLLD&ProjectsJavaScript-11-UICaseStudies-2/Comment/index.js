const commentContainer = document.getElementById('commentContainer');



const getForm = () =>{
    return `
        <div class="form">
            <input type="text" placeholder="Your Name">
            <textarea placeholder="comment"></textarea>
            <div class="form-buttons">
                <button>Post</button>
                <button>Cancel</button>
            </div>
        </div>
    `;
}

const getMainContent = (name, comment) => {
    return `
        <div class="main-comment">
            <p class="text-bold name">${name}</p>
            <p class="comment-text">${comment}</p>
            <div class="btn-holder">
                <button class="btn btn-primary small reply">Reply</button>
            </div>
        </div>
    `;
}

const getContent = (name, comment) =>{
    return `
        <div class="content">
            ${getMainContent(name, comment)}
            <div class="sub-comments"></div>
        </div>    
    `;
}

function generateCommentWithContent(content, divRef){
    const contentDivRef = document.createElement('div');
    contentDivRef.classList.add('comment');
    contentDivRef.innerHTML = content;
    divRef.appendChild(contentDivRef);
}

function generateCommentWithForm(content, divRef){
    const contentDivRef = document.createElement('div');
    contentDivRef.classList.add('comment');
    contentDivRef.innerHTML = content;
    divRef.appendChild(contentDivRef);
}

function createDefaultComment(){
    const defaultContent = getContent('Ashutosh', 'First Comment');
    generateCommentWithContent(defaultContent, commentContainer);
}

createDefaultComment();

commentContainer.addEventListener('click', function(ev){
    if(ev.target.classList.contains('reply')){
        const formData = getForm();
        const parentCommentRef = ev.target.closest('.comment');
        const subCommentRef = parentCommentRef.querySelector('& > .sub-comments .comment')
        generateCommentWithForm(formData, subCommentRef);
    }
})



const selected = (id) =>{
    const btns = document.querySelector(`#${id}`)
    btns.classList.replace("btn-outline-success", "btn-success") 
}

let path = window.location.pathname + window.location.search;
path = path.split('/').slice(0, 2).join('/');
let pageId = path.replace("/", "page")
selected(pageId);



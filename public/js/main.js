const selected = (id) =>{
    const btns = document.querySelector(`#${id}`)
    btns.classList.replace("btn-outline-success", "btn-success") 
}


const path = window.location.pathname + window.location.search;

let pageId = path.replace("/", "page")
selected(pageId);
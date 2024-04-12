const charCount = (event) => {
    const charCountElement = document.querySelector("#countText");
    charCountElement.textContent = event.target.value.length

    if(event.target.value.length >= 500){
        charCountElement.closest("small").classList.add("text-danger")
    }else{
        charCountElement.closest("small").classList.remove("text-danger")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.querySelector("textarea");
    textArea.addEventListener("input", charCount);
});
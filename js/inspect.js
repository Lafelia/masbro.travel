// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// })

document.onkeydown = (e) => {
    if(e.keyCode == 123) {
        return false
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
        return false;
    }
}
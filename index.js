// Define Stuff

const getValue = document.querySelectorAll('[data-custom-css]');
let styles = document.createElement('style');


// Construct Stuff

[...getValue].forEach(element => {
    element.style.cssText = element.dataset.customCss;
});


// Init Stuff

const header = document.head;
header.appendChild(styles);
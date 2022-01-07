

// Define Stuff

const getValue = document.querySelectorAll('[data-custom-css]');
let styles = document.createElement('style');



function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}



// Construct Stuff

[...getValue].forEach(element => {

    css(element, {
        'background-color': element.dataset.backgroundColor,
        'color': 'red'
    });

});


// Init Stuff

const header = document.head;
header.appendChild(styles);


// Define Stuff

const getValue = document.querySelectorAll('[data-custom-css]');
let styles = document.createElement('style');

console.log(getValue);
// Construct Stuff


[...getValue].forEach(element => {

    styles.append( `
        .show-value {
            width: ${element.dataset.cssWidth};
            background-color: ${element.dataset.backgroundColor};
        }`);

});


// Init Stuff

const header = document.head;
header.appendChild(styles);
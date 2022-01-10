// Define Stuff

const bodyData = document.body.dataset;

const OPTIONS ={
    minVw: bodyData.minVw,
    maxVw: bodyData.maxVw,
    minValue: bodyData.minValue,
    maxValue: bodyData.maxValue
}

const fluidTypeSystem = ( data ) => {
    return `
        html {
          font-size: ${data.minValue}px;
        }
        @media (min-width: ${data.minVw}px) {
          html {
            font-size: calc( ${data.minValue}px + (${data.maxValue} - ${data.minValue}) * (100vw - ${data.minVw}px) / (${data.maxVw} - ${data.minVw}) );
          }
        }
        @media (min-width: ${data.maxVw}px) {
          html {
            font-size: ${data.maxValue}px;
          }
        }
      }        
    `;
};

let styles = document.createElement('style');
styles.innerHTML = fluidTypeSystem( OPTIONS );

const header = document.head;
header.appendChild(styles);



// Free Custom CSS with data-attribute
const getValue = document.querySelectorAll('[data-custom-css]');

[...getValue].forEach(element => {
    element.style.cssText = element.dataset.customCss;
});
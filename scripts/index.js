const allButtons = document.querySelectorAll('[data-target]');
const outputElement = document.querySelector('[data-output]');

function sayHello() {
    console.log('hey');
}

function sayBye() {
    console.log('byeeeeee');
}

function sayNothing() {
    console.log('...');
}

let originalText;

function say(event) {
    // console.log(event.target);
    // console.log(event.target.getAttribute('data-message'));
    const message = event.target.getAttribute('data-message');
    if (originalText === undefined) {
        originalText = outputElement.textContent;
        outputElement.textContent = message;
    } else {
        outputElement.textContent = originalText;
        originalText = undefined;
    }

    // classList API lets you add/remove/toggle classes on a DOM element.
    event.target.classList.toggle('active');
    // document.querySelector('body').classList.toggle('active');
}

allButtons[0].addEventListener('click', say);
allButtons[1].addEventListener('click', say);
allButtons[2].addEventListener('click', say);
const body = document.querySelector('body');

const divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
body.appendChild(divWrapper);

const button1 = document.createElement('button');
button1.id = 'prikaz';
button1.textContent = 'PRIKAZI POKEMONE';
divWrapper.appendChild(button1);

const button2 = document.createElement('button');
button2.id = 'pobednik';
button2.textContent = 'PRIKAZI NAJJACEG POKEMONA';
divWrapper.appendChild(button2);

export { body, divWrapper, button1, button2 }
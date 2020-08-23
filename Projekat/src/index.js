import { divWrapp, divInfo, par, divState, divStatePrihod, divStateRashod, divInput, divInputUnos, selectBox, inputText, inputNumber, btn, divPrihodRashod, divPrihod, divRashod, divUnosPrihod, divUnosRashod } from './selector.js'

const app = document.querySelector('#app');

let podaci = [];

let countPrihod = 0;
let countRashod = 0;
let id = 1;



btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (inputText.value.trim() !== '' && inputNumber.value.trim() > 0) {
        var stavke = {
            id: id++,
            vrsta: selectBox.value,
            stavka: inputText.value,
            iznos: inputNumber.value
        }
    }
    podaci.push(stavke);

   if (inputText.value.trim() === '' || inputNumber.value.trim() <= 0) {
       const spanError = document.createElement('span');
       spanError.textContent = 'Nije validan unos';
       divInputUnos.appendChild(spanError);

       setInterval(() => {
           spanError.remove();
       }, 1000);

       inputText.value = '';
       inputNumber.value = '';
       selectBox.value = -1;

       return
   }

    if (stavke.vrsta == 1) {
        const div = document.createElement('div');
        div.id = id;
        divUnosPrihod.appendChild(div);

            const pText = document.createElement('p');
            pText.className = 'prviParagrafUnosPrihod';
            pText.textContent = stavke.stavka;
            div.appendChild(pText);

            const pNumber = document.createElement('p');
            pNumber.className = 'drugiParagrafUnosPrihod';
            pNumber.textContent = `+ ${stavke.iznos}`;
            div.appendChild(pNumber)

            const btnDelete = document.createElement('button');
            btnDelete.className = 'btnDelete';
            btnDelete.textContent = 'Ukloni stavku';
            div.appendChild(btnDelete);

            div.addEventListener('mouseenter', () => {
                btnDelete.className = 'btnDelete-show';
            })
            div.addEventListener('mouseleave', () => {
                btnDelete.className = 'btnDelete';
            })

            btnDelete.addEventListener('click', () => {
                div.remove()
                podaci.splice(podaci.findIndex(el => el.id == div.id),1)
            })

        const p3 = document.createElement('p');
        p3.className = 'drugiParagrafPrihod';
        countPrihod += Number(stavke.iznos);
        p3.textContent = `+ ${countPrihod}`;
        divStatePrihod.appendChild(p3)

        inputText.value = '';
        inputNumber.value = '';
        selectBox.value = -1;

    }
    else if (stavke.vrsta == 2) {
        const div = document.createElement('div');
        divUnosRashod.appendChild(div);

            const pText = document.createElement('p');
            pText.className = 'prviParagrafUnosRashod';
            pText.textContent = inputText.value;
            div.appendChild(pText);

        const p4 = document.createElement('p');
        p4.className = 'drugiParagrafRashod';
        countRashod += Number(stavke.iznos);
        p4.textContent = `- ${countRashod}`;
        divStateRashod.appendChild(p4)
        
            const pNumber = document.createElement('p');
            pNumber.className = 'drugiParagrafUnosRashod';
            pNumber.textContent = `- ${stavke.iznos}`;
            div.appendChild(pNumber);

            const pProcenat = document.createElement('p');
            pProcenat.className = 'treciParagrafUnosRashod';
            pProcenat.textContent = `${Math.round((countRashod / countPrihod) * 100)}%`;
            div.appendChild(pProcenat)

            const btnDelete = document.createElement('button');
            btnDelete.className = 'btnDelete';
            btnDelete.textContent = 'Ukolni stavku';
            div.appendChild(btnDelete);

            div.addEventListener('mouseenter', () => {
                btnDelete.className = 'btnDelete-show';
                btnDelete.style.backgroundColor = 'rgb(201, 74, 74)'
            })
            div.addEventListener('mouseleave', () => {
                btnDelete.className = 'btnDelete';
            })

            btnDelete.addEventListener('click', () => {
                div.remove()
            })
        
        const p5 = document.createElement('p');
        p5.className = 'treciParagrafRashod';
        p5.textContent = `${Math.round((countRashod / countPrihod) * 100)}%`;
        divStateRashod.appendChild(p5)

        inputText.value = '';
        inputNumber.value = '';
        selectBox.value = -1;
    }

    

    par.textContent = `${(countPrihod - countRashod)} RSD`;
})


console.log(app, divWrapp, divInfo, divInput, divInputUnos, divPrihod, divPrihodRashod, divRashod, divState, divStatePrihod, divStateRashod, divUnosPrihod, divUnosRashod);

const divApp = document.querySelector('#app');

const divOrder = document.createElement('div');

let count = 0;

divApp.appendChild(divOrder);

    const btnOrder1 = document.createElement('button');
    btnOrder1.textContent = 'ORDER';
    divOrder.appendChild(btnOrder1);

    const p1 = document.createElement('p');
    p1.textContent = count;
    divOrder.appendChild(p1);

    const btnOrder2 = document.createElement('button');
    btnOrder2.textContent = 'ORDER';
    divOrder.appendChild(btnOrder2);

    btnOrder1.addEventListener('click', () => {
        p1.textContent = ++count;
    })

    btnOrder2.addEventListener('click', () => {
        p1.textContent = ++count;
    })


const divFinishOrder = document.createElement('div');
divApp.appendChild(divFinishOrder);

    const btnFinishOrder1 = document.createElement('button');
    btnFinishOrder1.textContent = 'FINISH ORDER';
    divFinishOrder.appendChild(btnFinishOrder1);

    const p2 = document.createElement('p');
    p2.textContent = '';
    divFinishOrder.appendChild(p2);

    const p3 = document.createElement('p');
    p2.textContent = '';
    divFinishOrder.appendChild(p3);

    const btnFinishOrder2 = document.createElement('button');
    btnFinishOrder2.textContent = 'FINISH ORDER';
    divFinishOrder.appendChild(btnFinishOrder2);

    btnFinishOrder1.addEventListener('click', () => {
        if (count === 0) {
            p2.textContent = 'GRESKA';
            p3.textContent = 'Potrebno je odabrati broj pizza';
            return
        }
        p2.textContent = `Narucili ste ${count} pizza`
        p3.textContent = `${(new Date())}`;
        p1.textContent = 0;
    })

    btnFinishOrder2.addEventListener('click', () => {
        if (count === 0) {
            p2.textContent = 'GRESKA';
            p3.textContent = 'Potrebno je odabrati broj pizza';
            return
        }
        p2.textContent = `Narucili ste ${count} pizza`
        p3.textContent = `${(new Date())}`;
        p1.textContent = 0;
    })
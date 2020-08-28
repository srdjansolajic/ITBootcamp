import { infoLaunch } from './services';
import { LaunchList, selectBox, btn } from './components/LaunchList';


const app = document.querySelector('#app');


infoLaunch()
        .then(res => {
            const h1 = document.createElement('h1');
            h1.textContent = res.data.name
            app.prepend(h1)
        })


app.append(selectBox, btn, LaunchList() )

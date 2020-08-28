import { getAllLaunches, pastLaunches } from '../services.js';
import { Launch } from './Launch.js';

export const selectBox = document.createElement('select');
    selectBox.className = 'form-control';
    selectBox.id = 'exampleFormControlSelect1'
    for (let i = 2006; i <= 2020; i++) {
        let option = document.createElement('option');
        option.textContent = i;
        selectBox.appendChild(option);
    }

export const btn = document.createElement('button');
    btn.classList = 'btn btn-primary btn-lg btn-block'
    btn.textContent = 'SHOW LAUNCH'

export const LaunchList = () => {

    const divLaunchList = document.createElement('div');
    divLaunchList.className = 'launch-list';

    getAllLaunches()
                .then(res => {

                    pastLaunches().then(res => {
                        res.data.forEach(el => {
                            divLaunchList.appendChild(Launch(el))
                        })
                    })

                    btn.addEventListener('click', () => {
                        divLaunchList.textContent = '';
                        res.data.forEach(el => {
                            if (el.launch_year == selectBox.value) {
                            divLaunchList.appendChild(Launch(el))
                            }
                        })
                    })
                })
    return divLaunchList
}

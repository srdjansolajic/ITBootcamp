
export const Launch = (launch) => {

    const divLaunch = document.createElement('div');
    divLaunch.className = 'launch';

        const divInner0 = document.createElement('div');
        divInner0.className = 'inner-div-0';

            const imgInner = document.createElement('img');
            imgInner.src = launch.links.mission_patch;
            divInner0.appendChild(imgInner);

        const divInner1 = document.createElement('div');
        divInner1.className = 'inner-div-1';

            const spanInner = document.createElement('span');
            spanInner.textContent = launch.rocket.rocket_name;
            divInner1.appendChild(spanInner);

        const divInner2 = document.createElement('div');
        divInner2.className = 'inner-div-2';

            const spanInner2 = document.createElement('span');
            spanInner2.textContent = launch.launch_year;
            divInner2.appendChild(spanInner2);
    
    divLaunch.append(divInner0, divInner1, divInner2)

    return divLaunch
}
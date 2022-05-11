import sum from 'jason-mfe-lib'

const remoteComponent = () => {
    const element = document.createElement('script');
    element.src = 'http://localhost:3002/remoteEntry.js';
    element.type = 'text/javascript';
    element.async = true;
    element.onerror = () => {
        console.log(`load remote error`)
    };
    element.onload = () => {
        console.log(`load remote finished`);
        (async () => {
            await __webpack_init_sharing__('default');
            const container = window['remoteApp']; // or get the container somewhere else
            await container.init(__webpack_share_scopes__.default);
            const factory = await window['remoteApp'].get('./Widget');
            factory();
        })()

    };
    document.head.appendChild(element);
}

function component() {
    const element = document.createElement('div');
    const _sum = sum(2, 2);

    element.innerHTML = ['Hello', 'this', 'is', 'host', 'app'].join(' ') + ' ' + _sum;

    return element;
}

document.body.appendChild(component());


// load remote app

remoteComponent()


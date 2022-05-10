import sum from "jason-mfe-lib";


function component() {
    const element = document.createElement('div');
    const _sum = sum(4, 4)
    element.innerHTML = ['Hello', 'this', 'is', 'remote', 'app'].join(' ') + ' ' + _sum;

    return element;
}

document.body.appendChild(component());

const domain = 'http://192.168.11.37:8000/';

let list = document.getElementByld('list');
let listLoader = new XMLHttpRequest();

listLoader.addEventListener('readystatechange', () => {
    if (listLoader.readyState == 4) {
        if (listLoader.status == 200) {
            let data = JSON.parse(listLoader.responseText);
            let s = '<ul>', d;
            for (let i = 0; i < data.length; i++) {
                d = data[i];
                s += '<li>' + d.name + '</li>';
            }
            s += '</ul>';
            list.innerHTML = s;
        } else
            window.alert(listLoader.statusText);
    }
});

function listLoad() {
  listLoader.open('GET', domain + 'api/tasks/', true);
  listLoader.send();
}

listLoad();


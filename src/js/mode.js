const body = document.querySelector('body');

let mode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;

if (mode) {
    body.classList.add('dark');
}
darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    mode ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark')
})
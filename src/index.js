import './styles.css';
import menu from './menu.json';
import itemTemplate from './template.hbs';

const menuRef = document.querySelector('.js-menu');
const item = itemTemplate(menu);

menuRef.insertAdjacentHTML('afterbegin', item);

const switchInputRef = document.querySelector('input.js-switch-input');
const bodyRef = document.querySelector('body');
console.dir(switchInputRef);
console.log(bodyRef);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') !== null) {
  bodyRef.classList.add(JSON.parse(localStorage.getItem('theme')));
}
if (JSON.parse(localStorage.getItem('theme')) === 'dark-theme') {
  switchInputRef.checked = true;
}

function classSwitcher(classToRmv, classToAdd) {
  bodyRef.classList.remove(classToRmv);
  bodyRef.classList.add(classToAdd);
}
function addToLocal(string) {
  localStorage.setItem('theme', JSON.stringify(string));
}

switchInputRef.addEventListener('change', () => {
  if (switchInputRef.checked === true) {
    classSwitcher(Theme.LIGHT, Theme.DARK);
    addToLocal(Theme.DARK);
  } else {
    classSwitcher(Theme.DARK, Theme.LIGHT);
    addToLocal(Theme.LIGHT);
  }
});
console.log(localStorage.getItem('theme'));

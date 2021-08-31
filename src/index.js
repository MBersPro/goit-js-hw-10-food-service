import "./sass/main.scss";
import templateMarkup from "./hbs/template.hbs";
import dataMenu from "./menu.json";
console.log(dataMenu)
const refs = {
  menuRender: document.querySelector('.js-menu'),
  bodyNode: document.querySelector('body'),
  inputNode: document.querySelector('#theme-switch-toggle')
};

refs.menuRender.insertAdjacentHTML("beforeend", templateMarkup(dataMenu));
const bodyTheme = refs.bodyNode.classList;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function inputChangeFunc(e) {
  const check = e.target.checked;
  if (check) {
    localStorage.setItem("theme", Theme.DARK)
    changer(Theme.LIGHT, Theme.DARK);
    return
  }
  changer(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
};
let localStorageTheme = localStorage.getItem("theme");
if (localStorageTheme) {
  bodyTheme.add(localStorageTheme);
  if (localStorageTheme === Theme.DARK) {
    refs.inputNode.checked = true;
  }
};


function changer(remove, add) {
  bodyTheme.remove(remove);
  bodyTheme.add(add);
};

refs.inputNode.addEventListener("change", inputChangeFunc)
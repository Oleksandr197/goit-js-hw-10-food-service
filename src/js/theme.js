const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_KEY = 'theme';

const refs = {
  body: document.querySelector('body'),
  change: document.querySelector('#theme-switch-toggle'),
};
refs.change.addEventListener('change', onSetTheme);

function themePageSwitch() {
  const changeTheme = localStorage.getItem(STORAGE_KEY);

  if (changeTheme === Theme.DARK) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    refs.change.checked = true;
  } else {
    refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      
  }
}

function onSetTheme(event) {
  const setTheme = event.target.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem(STORAGE_KEY, setTheme);
  themePageSwitch(setTheme);
}


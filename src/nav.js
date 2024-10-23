const navBar = () => {
  const content = document.querySelector('header');
  const nav = document.createElement('nav');
  content.appendChild(nav);
  const ul = document.createElement('ul');
  nav.appendChild(ul);

  const home = document.createElement('li');
  home.classList.add('nav-link');
  home.id = 'home';
  home.textContent = 'Home';
  ul.appendChild(home);

  const about = document.createElement('li');
  about.classList.add('nav-link');
  about.id = 'about';
  about.textContent = 'About';

  ul.appendChild(about);

  const menu = document.createElement('li');
  menu.classList.add('nav-link');
  menu.id = 'menu';
  menu.textContent = 'Menu';

  ul.appendChild(menu);
};
export default navBar;

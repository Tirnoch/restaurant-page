import './styles.css';
import navBar from './nav';
import homePage from './home';
import aboutPage from './about';
import menuPage from './menu';

navBar();
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    const homeAct = document.querySelector('#home');
    const aboutAct = document.querySelector('#about');
    const menuAct = document.querySelector('#menu');
    let id = link.id;
    if (id === 'home') {
      homePage();
      homeAct.classList.add('current');
      aboutAct.classList.remove('current');
      menuAct.classList.remove('current');
    } else if (id === 'about') {
      aboutPage();
      homeAct.classList.remove('current');
      aboutAct.classList.add('current');
      menuAct.classList.remove('current');
    } else if (id === 'menu') {
      menuPage();
      homeAct.classList.remove('current');
      aboutAct.classList.remove('current');
      menuAct.classList.add('current');
    }
  })
);

homePage();

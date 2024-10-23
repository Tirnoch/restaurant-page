import './styles.css';
import navBar from './nav';
import homePage from './home';
const content = document.querySelector('#content');
const header = document.querySelector('header');
header.appendChild(navBar());
content.appendChild(homePage());

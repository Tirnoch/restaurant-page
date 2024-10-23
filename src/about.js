import aboutImage from './about-image.jpg';
const aboutPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = ``;

  const about = document.createElement('div');
  about.style.backgroundImage = `url(${aboutImage})`;
  about.classList.add('about-page');
  about.id = 'about-page';
  content.appendChild(about);

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'About the Restaurant';
  about.appendChild(title);

  const main = document.createElement('p');
  main.classList.add('main');
  main.textContent =
    'main body of the about page\nPhone: 123-456-7890\nAddress:1234 Main St\nHours: 10am-7pm';
  about.appendChild(main);
};

export default aboutPage;

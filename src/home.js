import mainImage from './main-image.jpg';

const homePage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = ``;

  const home = document.createElement('div');
  home.id = 'home-page';
  content.appendChild(home);
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Welcome to the Example Restaurant Page';
  home.appendChild(title);

  home.style.backgroundImage = `url(${mainImage}`;

  const desc = document.createElement('p');
  desc.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus voluptatum enim atque voluptatem, veritatis tempora quos, ullam illo perspiciatis velit consectetur impedit quisquam laboriosam amet nisi possimus. Repellendus, illum!';
  home.appendChild(desc);
};

export default homePage;

const homePage = () => {
  const content = document.querySelector('#content');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Welcome to the Example Restaurant Page';
  content.appendChild(title);

  const img = document.createElement('img');
  img.classList = 'hero-image';
  img.src = './main-image.jpg';
  content.appendChild(img);

  const desc = document.createElement('p');
  desc.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus voluptatum enim atque voluptatem, veritatis tempora quos, ullam illo perspiciatis velit consectetur impedit quisquam laboriosam amet nisi possimus. Repellendus, illum!';
  content.appendChild(desc);
};

export default homePage;

import menuImage from './menu-image.jpg';
const menuPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = ``;
  const menu = document.createElement('div');
  menu.style.backgroundImage = `url(${menuImage})`;
  menu.id = 'menu-page';
  menu.classList.add('menu-page');
  content.appendChild(menu);

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'This was supposed to be a menu';
  menu.appendChild(title);
  const menuList = document.createElement('div');
  menuList.classList.add('menu-list');
  menu.appendChild(menuList);
  for (let i = 0; i < 9; i++) {
    const item = document.createElement('p');
    item.classList.add('item');
    item.textContent = `item ${i + 1}`;
    menuList.appendChild(item);
  }
};

export default menuPage;

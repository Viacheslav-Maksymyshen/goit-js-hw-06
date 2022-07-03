const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
const imagesItems = images => {
  return images.map(image => {
    const createItems = document.createElement('li');
    createItems.classList.add('items');

    const createImg = document.createElement('img');
    createImg.classList.add('images');
    createImg.alt = image.alt;
    createImg.src = image.url;
    createImg.width = 320;
    createItems.appendChild(createImg);
    console.log(createItems);
    return createItems;
  });
};
const makeImagesItems = imagesItems(images);
gallery.append(...makeImagesItems);

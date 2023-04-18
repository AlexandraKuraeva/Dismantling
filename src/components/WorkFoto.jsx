import React from 'react';

const Gallery = () => {
  
  const images = [
    {
      id: '1',
      image:
        'https://moifundament.ru/wp-content/uploads/2022/03/demolition-prince-charles-1536x1024.jpg',
    },
    {
      id: '2',
      image:
        'https://static.tildacdn.com/tild3439-6131-4935-b565-373266396634/9a001f21b3221cbbcf0b.jpeg',
    },
    { id: '3', image: 'https://imgp24.ru/i/u_items/16399170959536.jpeg' },
    {
      id: '4',
      image: 'https://dailyreporter.com/wp-content/blogs.dir/1/files/2013/06/griffenMay2.jpg',
    },
    {
      id: '5',
      image:
        'https://avatars.mds.yandex.net/get-altay/2378041/2a00000171ecc4316209a3ddbbd963a71cc5/XXXL',
    },
    { id: '6', image: 'https://tkk82.ru/wp-content/uploads/2019/11/demonysj-doma.jpg' },
  ];

  return (
    <div className="gallery__wrapper">
      <div className="gallery__img">
        {images.map((img) => (
          <img key={img.id} src={img.image} alt="" className="" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

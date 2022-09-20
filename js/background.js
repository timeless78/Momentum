const MAX_IMAGELENGTH = 3;
const bgImage = document.createElement('img');
const imgPath = `img/${Math.floor(Math.random()*MAX_IMAGELENGTH)}.jpg`;
bgImage.src = imgPath;
bgImage.id = 'bgImage';

const divElement = document.createElement('div');
divElement.id = 'backgroundImage';
divElement.appendChild(bgImage);
document.body.appendChild(divElement);


// const imgPath = `img/${Math.floor(Math.random()*MAX_IMAGELENGTH)}.jpg`;
// const canvas = document.body.querySelector('#canvas');
// console.log(canvas);
// canvas.style.border='1px solid gray';
// canvas.style.backgroundImage=`url("${imgPath}")`;
// canvas.style.backgroundSize='cover';
// canvas.style.backgroundRepeat='repeat';

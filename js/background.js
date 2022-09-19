const MAX_IMAGELENGTH = 8;
//const bgImage = document.createElement('img');
//const imgPath = `img/${Math.floor(Math.random()*MAX_IMAGELENGTH)}.jpg`;
//bgImage.className = 'background';
//bgImage.src=imgPath;
//canvas.appendChild(bgImage);

const imgPath = `img/${Math.floor(Math.random()*MAX_IMAGELENGTH)}.jpg`;
const canvas = document.body.querySelector('#canvas');
console.log(canvas);
canvas.style.border='1px solid gray';
canvas.style.backgroundImage=`url("${imgPath}")`;
canvas.style.backgroundSize='cover';
canvas.style.backgroundRepeat='repeat';

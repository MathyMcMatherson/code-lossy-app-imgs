const origImgElt = document.querySelector("#orig-img");
const zoomImgElts = document.querySelectorAll(".zoom-img");

const btnZoom1 = document.querySelector("#zoom1");
const btnZoom2 = document.querySelector("#zoom2");
const btnZoom3 = document.querySelector("#zoom3");
const btnZoom4 = document.querySelector("#zoom4");
const btnZoom6 = document.querySelector("#zoom6");

const btnSunset = document.querySelector("#sunsetBtn");
const btnFish = document.querySelector("#fishBtn");
const btnBird = document.querySelector("#birdBtn");
const btnPlanet = document.querySelector("#planetBtn");
const btnFlowers = document.querySelector("#flowersBtn");

const img80Elt = document.querySelector("#img_80");
const img60Elt = document.querySelector("#img_60");
const img40Elt = document.querySelector("#img_40");
const img20Elt = document.querySelector("#img_20");

let x;
let y;
let ZOOM;
let WIDTH;
let HEIGHT;


const changeImg = (imgName) => {
  origImgElt.src = `${imgName}/${imgName}_100.jpg`;
  img80Elt.src = `${imgName}/${imgName}_80.jpg`;
  img60Elt.src = `${imgName}/${imgName}_60.jpg`;
  img40Elt.src = `${imgName}/${imgName}_40.jpg`;
  img20Elt.src = `${imgName}/${imgName}_20.jpg`;
}

btnSunset.addEventListener("click", (e) => {
  changeImg("sunset");
});

btnFlowers.addEventListener("click", (e) => {
  changeImg("flowers");
});

btnFish.addEventListener("click", (e) => {
  changeImg("fish");
});

btnPlanet.addEventListener("click", (e) => {
  changeImg("planet");
});

btnBird.addEventListener("click", (e) => {
  changeImg("bird");
});

const changeZoom = (newZoom) => {
  ZOOM = newZoom;
  WIDTH = origImgElt.width*ZOOM;
  HEIGHT = origImgElt.height*ZOOM;
  zoomImgElts.forEach((elt) => {
    elt.style.width = `${WIDTH}px`;
    elt.style.height = `${HEIGHT}px`;
  });
}

btnZoom1.addEventListener("click", (e) => {
  changeZoom(1);
});

btnZoom2.addEventListener("click", (e) => {
  changeZoom(2);
});

btnZoom3.addEventListener("click", (e) => {
  changeZoom(3);
});

btnZoom4.addEventListener("click", (e) => {
  changeZoom(4);
});

btnZoom6.addEventListener("click", (e) => {
  changeZoom(6);
});

document.body.addEventListener("mousemove", (e) => {
  x = e.pageX - origImgElt.offsetLeft;
  y = e.pageY - origImgElt.offsetTop;
  zoomImgElts.forEach((elt) => {
    elt.style.left = `-${x*ZOOM}px`;
    elt.style.top = `-${y*ZOOM}px`;  
  });
  //console.log(`(${x}, ${y})`);
})

changeImg("flowers");
changeZoom(1);
window.addEventListener('resize', () => {
  changeZoom(ZOOM);
});

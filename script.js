//Grab all the HTML elements I'll need later

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

//--------
//Some variables that get used in functions below.
//Defined here so they're not re-defined everytime the mouseMove event happens
let x;
let y;
let ZOOM;
let WIDTH;
let HEIGHT;

//Function to change the images when you click the img buttons
const changeImg = (imgName) => {
  origImgElt.src = `${imgName}/${imgName}_100.jpg`;
  img80Elt.src = `${imgName}/${imgName}_80.jpg`;
  img60Elt.src = `${imgName}/${imgName}_60.jpg`;
  img40Elt.src = `${imgName}/${imgName}_40.jpg`;
  img20Elt.src = `${imgName}/${imgName}_20.jpg`;
}

//Event listeners for when you click img buttons
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
//---------------

//Function for changing the zoom when you click a zoom button
const changeZoom = (newZoom) => {
  ZOOM = newZoom;
  WIDTH = origImgElt.width*ZOOM;
  HEIGHT = origImgElt.height*ZOOM;
  zoomImgElts.forEach((elt) => {
    elt.style.width = `${WIDTH}px`;
    elt.style.height = `${HEIGHT}px`;
  });
}

//Event listeners for clicking zoom buttons
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
//-------

//Update image locations when mouse moves
document.body.addEventListener("mousemove", (e) => {
  //Stole this from a stackOverflow post
  x = e.pageX - origImgElt.offsetLeft;
  y = e.pageY - origImgElt.offsetTop;
  //Update each img element
  zoomImgElts.forEach((elt) => {
    elt.style.left = `-${x*ZOOM}px`;
    elt.style.top = `-${y*ZOOM}px`;  
  });
  //console.log(`(${x}, ${y})`);
})

//Initial settings
changeImg("flowers");
changeZoom(1);

//When window is resized, it changes dimensions of source image (since website is responsive)
//So, need to update coordinate references to new source img dimensions
//The end result isn't obvious below, but within changeZoom, the img.width and img.height has been updated
//and that's where it matters.
window.addEventListener('resize', () => {
  changeZoom(ZOOM);
});

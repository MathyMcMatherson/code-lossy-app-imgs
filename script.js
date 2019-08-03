const origImgElt = document.querySelector("#orig-img");
const zoomImgElts = document.querySelectorAll(".zoom-img");

const btnZoom1 = document.querySelector("#zoom1");
const btnZoom2 = document.querySelector("#zoom2");
const btnZoom3 = document.querySelector("#zoom3");
const btnZoom4 = document.querySelector("#zoom4");
const btnZoom6 = document.querySelector("#zoom6");

let x;
let y;
let ZOOM;
let WIDTH;
let HEIGHT;

const changeZoom = (newZoom) => {
  ZOOM = newZoom;
  WIDTH = 640*ZOOM;
  HEIGHT = 480*ZOOM;
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

changeZoom(1)

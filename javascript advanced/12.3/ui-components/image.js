function getImg(src, width = 400) {
  const img = document.createElement("img");
  img.height = 200;
  img.width = 200;
  img.src = src;
  img.style.border = "1px solid black";
  return img;
}

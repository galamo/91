function getImg(src, width = 200) {
  const img = document.createElement("img");
  img.height = 200;
  img.width = width;
  img.src = src;
  return img;
}

function getImg(src, width = 400) {
  const img = document.createElement("img");
  img.height = 400;
  img.width = width;
  img.src = src;
  return img;
}

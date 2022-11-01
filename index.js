function newColor() {
  let numbers = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index <6; index++) {
    color = color + numbers[Math.floor(Math.random() * 16)];
  }
   document.body.style.background =color ;
  document.getElementById("hex").innerHTML = color;
}

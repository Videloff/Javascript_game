(function doFirst() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 140px Times';
  ctx.textBaseline = 'center';
  const background = new Image();
  background.src = "sources/bg.png";
  
  background.onload = () => {
    const pattern = ctx.createPattern(background, null);
    ctx.fillStyle = pattern;
    ctx.fillRect(0,0,canvas.width, canvas.height);
  }
})();
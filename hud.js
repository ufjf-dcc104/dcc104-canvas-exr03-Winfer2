function Hud(){
  this.life=0;
}

Hud.prototype.desenha = function(ctx){
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  ctx.fillRect(0, 0, 1080, 50);
  ctx.strokeRect(0, 0, 1080, 50);

  ctx.fillStyle = "green";

  ctx.fillRect(50, 10, this.life, 30);
  ctx.strokeRect(50, 10, 200, 30);

  ctx.font = "40px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("❤",5,40);

  ctx.fillText("Pontos: "+pontos,300,40);


}

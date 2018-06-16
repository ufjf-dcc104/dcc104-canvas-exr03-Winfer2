function Menu(){
  this.y1 = 160;
  this.y2 = 360;
  this.y  = this.y1;
}

 Menu.prototype.desenha = function(ctx){

  ctx.fillStyle = "blue";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  ctx.fillRect(190, this.y, 160, 50);
  ctx.strokeRect(190, this.y, 160, 50);

  ctx.font = "40px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("NOME DO JOGO",540,50);
  ctx.fillText("START",200,200);
    ctx.fillText("SCORE",200,400);
}

Menu.prototype.controle = function(e){
  if(e===13){
    if (this.y  === this.y1) estado = 2;
    if (this.y  === this.y2) estado = 1;
  }else{
    if (this.y  === this.y1) this.y  = this.y2;
    else  this.y  = this.y1;
  }
}

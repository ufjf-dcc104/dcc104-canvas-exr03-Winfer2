function Score(){
  this.placar = [];
  for(i=0;i<10;i++){
    this.placar.push(0);
  }
}

Score.prototype.desenha = function(ctx){
  this.placar.sort(function(a, b){return b-a});
  ctx.font = "40px Arial";
  ctx.fillStyle = "LawnGreen";
  ctx.fillText("Score",450,50);
  for(i=0;i<10;i++){
    ctx.fillText(this.placar[i],450,100+50*i)
  }

}
